
import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../../context/I18nContext';
import { 
    ChevronLeft, 
    ChevronRight, 
    Download, 
    Loader2, 
    ZoomIn, 
    ZoomOut, 
    Maximize, 
    Minimize, 
    Move,
    RotateCcw
} from 'lucide-react';

// Declaração global para a lib PDF.js carregada via CDN
declare global {
  interface Window {
    pdfjsLib: any;
  }
}

// Interface para o estado da "Câmera" (Posição e Zoom)
interface TransformState {
    scale: number;
    x: number;
    y: number;
}

const CatalogFlipbook: React.FC = () => {
  const { t } = useI18n();
  const pdfUrl = t('productsPage.catalogPdfUrl');

  // --- Estados do PDF ---
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // --- Cache de Páginas ---
  // Armazena a imagem (DataURL) das páginas já renderizadas para performance
  const [pageCache, setPageCache] = useState<Record<number, string>>({});
  
  // --- Estados de UI ---
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- Engine de Transformação ---
  const [transform, setTransform] = useState<TransformState>({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  
  // --- Refs ---
  const wrapperRef = useRef<HTMLDivElement>(null); // O container que fica Fullscreen
  const viewportRef = useRef<HTMLDivElement>(null); // A janela de visualização (overflow hidden)
  const canvasLeftRef = useRef<HTMLCanvasElement>(null);
  const canvasRightRef = useRef<HTMLCanvasElement>(null);
  const canvasSingleRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<any>(null);

  // Fator de qualidade de renderização
  const RENDER_SCALE = isMobile ? 1.5 : 2.5;

  // --- 1. Inicialização e Responsividade ---
  
  useEffect(() => {
    const handleResize = () => {
        const mobile = window.innerWidth < 1024;
        if (mobile !== isMobile) {
            setIsMobile(mobile);
            resetView();
            // Limpa o cache ao mudar o layout, pois a escala de renderização muda
            setPageCache({});
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Sincronizar estado de fullscreen com o navegador (ESC nativo)
  useEffect(() => {
      const handleFullscreenChange = () => {
          setIsFullscreen(!!document.fullscreenElement);
      };
      
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // --- 2. Carregamento Dinâmico do PDF.js e do Documento ---

  useEffect(() => {
    // Helper function to load script
    const loadPdfScript = async () => {
        if (window.pdfjsLib) return true;
        
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
            script.async = true;
            script.onload = () => {
                if (window.pdfjsLib) {
                    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                    resolve(true);
                } else {
                    reject(new Error("PDF.js loaded but window.pdfjsLib not found"));
                }
            };
            script.onerror = () => reject(new Error("Failed to load PDF.js script"));
            document.body.appendChild(script);
        });
    };

    const loadPdf = async () => {
      try {
        setLoading(true);
        
        // Dynamically load the library only when component mounts
        await loadPdfScript();

        if (!window.pdfjsLib) {
            throw new Error("Biblioteca PDF não inicializada.");
        }

        const loadingTask = window.pdfjsLib.getDocument(pdfUrl);
        const doc = await loadingTask.promise;
        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        setLoading(false);
      } catch (err) {
        console.error("PDF Load Error:", err);
        setError("Erro ao carregar o catálogo. Verifique sua conexão.");
        setLoading(false);
      }
    };
    
    loadPdf();
  }, [pdfUrl]);

  // --- 3. Engine de Renderização (Canvas com Cache) ---
  
  const renderPageToCanvas = async (pageNumber: number, canvas: HTMLCanvasElement) => {
      if (!pdfDoc) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Verificar Cache
      if (pageCache[pageNumber]) {
          const img = new Image();
          img.src = pageCache[pageNumber];
          img.onload = () => {
              // Ajusta o tamanho do canvas para casar com a imagem cacheada
              // Isso evita distorções se a imagem cacheada tiver escala diferente
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0);
          };
          return; // Retorna cedo, sem usar PDF.js
      }

      // 2. Se não estiver em cache, renderiza do PDF
      try {
          const page = await pdfDoc.getPage(pageNumber);
          const viewport = page.getViewport({ scale: RENDER_SCALE });
          
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const renderContext = {
              canvasContext: ctx,
              viewport: viewport
          };

          const task = page.render(renderContext);
          renderTaskRef.current = task;
          
          await task.promise;

          // 3. Salvar no Cache após renderização bem sucedida
          // Usamos JPEG qualidade 0.8 para economizar memória sem perda visual perceptível
          const cacheData = canvas.toDataURL('image/jpeg', 0.8);
          setPageCache(prev => ({ ...prev, [pageNumber]: cacheData }));

      } catch (error: any) {
          // Ignora erros de cancelamento de tarefa (navegação rápida)
          if (error.name !== 'RenderingCancelledException') {
              console.error("Erro ao renderizar página", pageNumber, error);
          }
      }
  };

  useEffect(() => {
      if (!pdfDoc) return;

      const render = async () => {
          if (renderTaskRef.current) {
              try { await renderTaskRef.current.cancel(); } catch(e) {} 
          }

          if (isMobile) {
              if (canvasSingleRef.current) {
                  await renderPageToCanvas(currentPage, canvasSingleRef.current);
              }
          } else {
              if (canvasLeftRef.current) {
                  await renderPageToCanvas(currentPage, canvasLeftRef.current);
              }
              if (canvasRightRef.current) {
                  if (currentPage + 1 <= totalPages) {
                      await renderPageToCanvas(currentPage + 1, canvasRightRef.current);
                  } else {
                      const ctx = canvasRightRef.current.getContext('2d');
                      if (ctx) ctx.clearRect(0, 0, canvasRightRef.current.width, canvasRightRef.current.height);
                  }
              }
          }
      };

      render();
      resetView();

  }, [pdfDoc, currentPage, isMobile, totalPages]);


  // --- 4. Controles da "Câmera" (Pan & Zoom) ---

  const resetView = () => setTransform({ scale: 1, x: 0, y: 0 });

  const handleWheel = (e: React.WheelEvent) => {
      if (e.ctrlKey) {
          e.preventDefault();
          const zoomSensitivity = 0.001;
          const delta = -e.deltaY * zoomSensitivity;
          const newScale = Math.min(Math.max(0.5, transform.scale + delta), 4);
          setTransform(prev => ({ ...prev, scale: newScale }));
      } else {
          // Se tiver zoom, permite pan vertical com scroll
          if (transform.scale > 1) {
             e.preventDefault();
             setTransform(prev => ({ ...prev, y: prev.y - e.deltaY }));
          }
      }
  };

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
      setIsDragging(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      dragStartRef.current = { 
          x: clientX - transform.x, 
          y: clientY - transform.y 
      };
  };

  const doDrag = (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      setTransform(prev => ({
          ...prev,
          x: clientX - dragStartRef.current.x,
          y: clientY - dragStartRef.current.y
      }));
  };

  const stopDrag = () => setIsDragging(false);

  // --- 5. Ações da UI ---

  const zoomIn = () => setTransform(prev => ({ ...prev, scale: Math.min(prev.scale + 0.5, 4) }));
  const zoomOut = () => setTransform(prev => ({ ...prev, scale: Math.max(prev.scale - 0.5, 0.5) }));
  
  const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
          wrapperRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(console.error);
      } else {
          document.exitFullscreen().then(() => setIsFullscreen(false));
      }
  };

  const prevPage = () => setCurrentPage(p => Math.max(1, p - (isMobile ? 1 : 2)));
  const nextPage = () => setCurrentPage(p => Math.min(totalPages, p + (isMobile ? 1 : 2)));

  // Atalhos de Teclado
  useEffect(() => {
      const handleKeys = (e: KeyboardEvent) => {
          if (e.key === "ArrowLeft") prevPage();
          if (e.key === "ArrowRight") nextPage();
          if (e.key === "+" || e.key === "=") zoomIn();
          if (e.key === "-") zoomOut();
          if (e.key === "0") resetView();
          if (e.key === "Escape" && isFullscreen) {
              document.exitFullscreen();
              setIsFullscreen(false);
          }
      };
      window.addEventListener('keydown', handleKeys);
      return () => window.removeEventListener('keydown', handleKeys);
  }, [isMobile, totalPages, isFullscreen]);


  // --- UI ---

  if (error) {
      return (
          <div className="flex flex-col items-center justify-center h-96 bg-gray-100 text-gray-600 rounded-xl m-4 border-2 border-dashed border-gray-300">
              <p className="mb-4 font-bold text-lg">{error}</p>
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
                  <Download size={20} /> Baixar PDF Manualmente
              </a>
          </div>
      );
  }

  // Sincroniza a altura do Canvas com o Container.
  // Em tela cheia, ocupa 85% da altura da tela.
  // Em modo normal, fixa em 400px (mobile) ou 500px (desktop) para bater com o container.
  const canvasHeightClass = isFullscreen 
    ? 'h-[85vh] w-auto' 
    : 'h-[400px] md:h-[500px] w-auto';

  return (
    <section className="py-12 md:py-20 bg-brand-blue-dark relative overflow-hidden">
        {/* Background Decorativo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Cabeçalho da Seção */}
            <div className="text-center mb-10">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3 border border-brand-orange/20">
                    Catálogo Digital
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Nossas Soluções</h2>
                <p className="text-blue-200/80 max-w-2xl mx-auto text-sm md:text-base">
                    Navegue pelo nosso catálogo completo. Use as setas ou o teclado para mudar de página.
                </p>
            </div>

            {/* === A "CAIXA" (Container Principal) === */}
            <div 
                ref={wrapperRef}
                className={`
                    bg-[#111827] rounded-2xl shadow-2xl border border-gray-700/50 flex flex-col overflow-hidden transition-all duration-300
                    ${isFullscreen ? 'fixed inset-0 z-50 rounded-none border-0 h-screen w-screen' : 'w-full max-w-6xl mx-auto'}
                `}
            >
                {/* 1. VIEWPORT (Janela de Visualização) */}
                <div 
                    ref={viewportRef}
                    className={`
                        relative w-full bg-gray-900/50 overflow-hidden flex items-center justify-center
                        ${isFullscreen ? 'flex-1 h-full' : 'h-[400px] md:h-[500px]'} 
                        ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
                    `}
                    onMouseDown={startDrag}
                    onMouseMove={doDrag}
                    onMouseUp={stopDrag}
                    onMouseLeave={stopDrag}
                    onTouchStart={startDrag}
                    onTouchMove={doDrag}
                    onTouchEnd={stopDrag}
                    onWheel={handleWheel}
                >
                    {/* Pattern de Fundo */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    {loading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-gray-900/80 backdrop-blur-sm">
                            <Loader2 className="w-12 h-12 text-brand-orange animate-spin mb-4" />
                            <span className="text-white font-medium animate-pulse tracking-wide">Carregando catálogo...</span>
                        </div>
                    )}

                    {/* Dica Visual */}
                    {!loading && transform.scale === 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20 text-xs flex items-center gap-2 pointer-events-none select-none bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            <Move size={12} /> Arraste para mover • Scroll para Zoom
                        </div>
                    )}

                    {/* === O "MUNDO" (Camada Transformada) === */}
                    <div 
                        className="will-change-transform origin-center transition-transform duration-75 ease-out"
                        style={{
                            transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
                        }}
                    >
                        {/* O Livro */}
                        <div className={`relative flex shadow-2xl ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            {/* Página Esquerda (ou Única) */}
                            <div className="relative bg-white">
                                <canvas 
                                    ref={isMobile ? canvasSingleRef : canvasLeftRef} 
                                    className={`block object-contain ${canvasHeightClass}`}
                                />
                                {!isMobile && (
                                    <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none mix-blend-multiply"></div>
                                )}
                            </div>

                            {/* Página Direita (Desktop) */}
                            {!isMobile && (
                                <div className="relative bg-white">
                                    <canvas 
                                        ref={canvasRightRef} 
                                        className={`block object-contain ${canvasHeightClass}`}
                                    />
                                    <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/10 to-transparent pointer-events-none mix-blend-multiply"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* 2. BARRA DE FERRAMENTAS (Footer) */}
                <div className="bg-gray-800 border-t border-gray-700 p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-20">
                    
                    {/* Esquerda: Navegação */}
                    <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start order-2 md:order-1">
                        <button 
                            onClick={prevPage} 
                            disabled={currentPage === 1}
                            className="p-2.5 rounded-lg bg-gray-700 text-white hover:bg-brand-blue-dark disabled:opacity-30 disabled:hover:bg-gray-700 transition-all active:scale-95"
                            title="Página Anterior"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span className="text-white font-mono text-sm whitespace-nowrap bg-gray-900 px-4 py-2 rounded-lg border border-gray-700 min-w-[140px] text-center">
                            Pág. <span className="text-brand-orange font-bold">{currentPage}</span> 
                            {!isMobile && currentPage + 1 <= totalPages && <span> - {currentPage + 1}</span>} 
                            <span className="text-gray-500"> de {totalPages}</span>
                        </span>
                        <button 
                            onClick={nextPage} 
                            disabled={currentPage >= totalPages}
                            className="p-2.5 rounded-lg bg-gray-700 text-white hover:bg-brand-blue-dark disabled:opacity-30 disabled:hover:bg-gray-700 transition-all active:scale-95"
                            title="Próxima Página"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Centro: Ferramentas de Zoom */}
                    <div className="flex items-center gap-1 bg-gray-900 p-1 rounded-xl border border-gray-700 order-1 md:order-2">
                        <button onClick={zoomOut} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors" title="Diminuir Zoom">
                            <ZoomOut size={18} />
                        </button>
                        <div className="w-16 text-center text-xs font-bold text-brand-orange border-l border-r border-gray-700 py-1">
                            {Math.round(transform.scale * 100)}%
                        </div>
                        <button onClick={zoomIn} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors" title="Aumentar Zoom">
                            <ZoomIn size={18} />
                        </button>
                        <div className="w-px h-4 bg-gray-700 mx-1"></div>
                        <button onClick={resetView} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors" title="Resetar Vista">
                            <RotateCcw size={16} />
                        </button>
                        <button onClick={toggleFullscreen} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors" title="Tela Cheia">
                            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                        </button>
                    </div>

                    {/* Direita: Download */}
                    <div className="w-full md:w-auto flex justify-center md:justify-end order-3">
                        <a 
                            href={pdfUrl} 
                            target="_blank" 
                            download
                            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-brand-orange/20 active:scale-95 w-full md:w-auto justify-center"
                        >
                            <Download size={18} />
                            <span>Baixar PDF</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CatalogFlipbook;

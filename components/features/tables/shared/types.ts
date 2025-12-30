export interface HeaderGroupCell {
    text: string;
    colSpan: number;
    rowSpan?: number;
    className: string;
}

export interface TableItem {
    name: string;
    description?: string;
    imageUrls?: string[];
    headerGroups?: HeaderGroupCell[][];
    headers?: string[];
    rows?: string[][];
    items?: TableItem[];
    // Flags for search functionality
    _isContentMatch?: boolean;
    contentMatchOnly?: boolean;
}
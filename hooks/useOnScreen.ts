import { useState, useEffect, RefObject } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * Uses the Intersection Observer API.
 * 
 * @param ref - React RefObject pointing to the target element.
 * @param threshold - Number between 0 and 1 indicating the percentage of the element's visibility required to trigger.
 * @returns boolean - True if the element has intersected.
 */
export const useOnScreen = (ref: RefObject<HTMLElement | null>, threshold = 0.1): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.disconnect(); // Only trigger once
                }
            },
            { threshold }
        );

        observer.observe(currentRef);

        return () => {
            observer.disconnect();
        };
    }, [ref, threshold]);

    return isIntersecting;
};

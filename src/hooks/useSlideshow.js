import { useEffect, useState } from "react";

/**
 * Custom hook for managing slideshow/carousel functionality
 * @param {Array} items - Array of items to display
 * @param {number} interval - Interval in milliseconds for auto-sliding (default: 3000)
 * @returns {Object} - Object containing current index and slide position calculator
 */
export const useSlideshow = (items, interval = 3000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items?.length) return;

    const slideInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [items?.length, interval]);

  /**
   * Calculate slide position based on current index and item index
   * @param {number} itemIndex - Index of the current item
   * @returns {string} - CSS class name for slide position
   */
  const getSlidePosition = (itemIndex) => {
    if (itemIndex === index) {
      return "activeSlide";
    }
    if (
      itemIndex === index - 1 ||
      (index === 0 && itemIndex === items.length - 1)
    ) {
      return "lastSlide";
    }
    return "nextSlide";
  };

  return {
    index,
    getSlidePosition
  };
};
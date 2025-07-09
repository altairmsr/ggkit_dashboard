/**
 * Get ranking class based on student position
 * @param {number} position - Student position (0-based index)
 * @returns {string} - CSS class name for ranking
 */
export const getRankingClass = (position) => {
  switch (position) {
    case 0:
      return "gold";
    case 1:
      return "silver";
    case 2:
      return "bronze";
    default:
      return "";
  }
};

/**
 * Check if student is in top 3
 * @param {number} position - Student position (0-based index)
 * @returns {boolean} - True if student is in top 3
 */
export const isTop3 = (position) => position <= 2;
import { TOP_POSITIONS, POSITION_CLASSES } from "../constants/index.js";

/**
 * Получает CSS классы для студента на основе позиции
 * @param {number} position - позиция студента (индекс)
 * @returns {string} строка с CSS классами
 */
export const getStudentClasses = (position) => {
  const isTopThree = position <= 2;
  const positionClass = POSITION_CLASSES[position] || "";

  return `student-card ${isTopThree ? "top-3" : ""} ${positionClass}`.trim();
};

/**
 * Получает позицию студента (1-индексированная)
 * @param {number} index - индекс в массиве (0-индексированный)
 * @returns {number} позиция студента
 */
export const getStudentPosition = (index) => index + 1;

/**
 * Форматирует GPA до 2 знаков после запятой
 * @param {number} gpa - GPA студента
 * @returns {string} отформатированный GPA
 */
export const formatGPA = (gpa) => gpa.toFixed(2);

import { useMemo } from "react";

/**
 * Хук для получения данных студентов с мемоизацией
 * @param {Array} students - массив студентов
 * @returns {Array} мемоизированный массив студентов
 */
export const useStudents = (students) => {
  return useMemo(() => {
    if (!Array.isArray(students)) {
      console.warn("Students data is not an array:", students);
      return [];
    }

    return students.map((student, index) => ({
      ...student,
      // Убеждаемся что у каждого студента есть уникальный ID
      id: student.id ?? index,
      // Нормализуем GPA
      gpa: Number(student.gpa) || 0,
    }));
  }, [students]);
};

/**
 * Хук для получения данных групп с мемоизацией
 * @param {Array} groups - массив групп
 * @returns {Array} мемоизированный массив групп
 */
export const useGroups = (groups) => {
  return useMemo(() => {
    if (!Array.isArray(groups)) {
      console.warn("Groups data is not an array:", groups);
      return [];
    }

    return groups;
  }, [groups]);
};

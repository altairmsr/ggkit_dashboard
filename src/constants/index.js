// Константы для позиций/наград
export const POSITIONS = {
  GOLD: "gold",
  SILVER: "silver",
  BRONZE: "bronze",
  REGULAR: "regular",
};

// Константы для определения топ позиций
export const TOP_POSITIONS = {
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
};

// Маппинг позиций к CSS классам
export const POSITION_CLASSES = {
  [TOP_POSITIONS.FIRST]: POSITIONS.GOLD,
  [TOP_POSITIONS.SECOND]: POSITIONS.SILVER,
  [TOP_POSITIONS.THIRD]: POSITIONS.BRONZE,
};

// Константы для курсов
export const COURSE_TITLES = {
  1: "1 курс",
  2: "2 курс",
  3: "3 курс",
  4: "4 курс",
};

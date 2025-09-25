import React from "react";
import course1 from "../data/course1";
import course2 from "../data/course2";
import course3 from "../data/course3";
import course4 from "../data/course4";
import CourseColumn from "../components/CourseColumn/CourseColumn";
import Layout from "../components/Layout/Layout";
import { COURSE_TITLES } from "../constants/index";

const Courses_12 = () => {
  // Конфигурация курсов для упрощения управления данными
  const coursesConfig = [
    { title: COURSE_TITLES[1], data: course1 },
    { title: COURSE_TITLES[2], data: course2 },
    { title: COURSE_TITLES[3], data: course3 },
    { title: COURSE_TITLES[4], data: course4 },
  ];

  return (
    <Layout title="Лучшие студенты ГГКИТ" width={1000}>
      <div className="student-cont grid-4">
        {coursesConfig.map(({ title, data }) => (
          <CourseColumn key={title} title={title} students={data} />
        ))}
      </div>
    </Layout>
  );
};

export default Courses_12;

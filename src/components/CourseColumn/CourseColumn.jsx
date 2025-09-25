import React, { memo } from "react";
import StudentCard from "../StudentCard/StudentCard";

const CourseColumn = memo(({ title, students }) => {
  if (!students || students.length === 0) {
    return (
      <div className="student-col">
        <h3>{title}</h3>
        <p>Нет данных</p>
      </div>
    );
  }

  return (
    <div className="student-col">
      <h3>{title}</h3>
      {students.map((student, index) => (
        <StudentCard
          key={student.id || `${title}-${index}`}
          student={student}
          index={index}
        />
      ))}
    </div>
  );
});

CourseColumn.displayName = "CourseColumn";

export default CourseColumn;

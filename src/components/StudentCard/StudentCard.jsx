import React, { memo } from "react";
import {
  getStudentClasses,
  getStudentPosition,
  formatGPA,
} from "../../utils/studentUtils";

const StudentCard = memo(({ student, index }) => {
  const position = getStudentPosition(index);
  const cssClasses = getStudentClasses(index);

  return (
    <div className={cssClasses}>
      <p className="student-name">
        {position}. {student.name}
      </p>
      <div className="student-score-cont">
        <span className="student-score-label">{student.group}</span>
        <span className="student-score-value">{formatGPA(student.gpa)}</span>
      </div>
    </div>
  );
});

StudentCard.displayName = "StudentCard";

export default StudentCard;

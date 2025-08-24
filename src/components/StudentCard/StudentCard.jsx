import { getRankingClass, isTop3 } from "../../utils/ranking";

/**
 * StudentCard component for displaying student information
 * @param {Object} props - Component props
 * @param {Object} props.student - Student data
 * @param {number} props.student.id - Student ID
 * @param {string} props.student.name - Student name
 * @param {string} props.student.group - Student group
 * @param {number} props.student.gpa - Student GPA
 * @returns {JSX.Element} - StudentCard component
 */
const StudentCard = ({ student }) => {
  const position = student.id;
  const displayPosition = position + 1;
  
  const cardClasses = [
    "student-card",
    isTop3(position) ? "top-3" : "",
    getRankingClass(position)
  ].filter(Boolean).join(" ");

  return (
    <div className={cardClasses}>
      <p className="student-name">
        {displayPosition}. {student.name}
      </p>
      <div className="student-score-cont">
        <span className="student-score-label">{student.group}</span>
        <span className="student-score-value">
          {student.gpa.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default StudentCard;
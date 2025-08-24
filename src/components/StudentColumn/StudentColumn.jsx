import StudentCard from "../StudentCard/StudentCard";

/**
 * StudentColumn component for displaying a column of students
 * @param {Object} props - Component props
 * @param {string} props.title - Column title (e.g., "1 курс")
 * @param {Array} props.students - Array of student data
 * @returns {JSX.Element} - StudentColumn component
 */
const StudentColumn = ({ title, students }) => {
  return (
    <div className="student-col">
      <h3>{title}</h3>
      {students.map((student) => (
        <StudentCard key={student.id + 1} student={student} />
      ))}
    </div>
  );
};

export default StudentColumn;
import course1 from "../data/course1";
import course2 from "../data/course2";
import course3 from "../data/course3";
import StudentColumn from "../components/StudentColumn/StudentColumn";

const Courses_12 = () => {
  return (
    <div className="page">
      <div className="top-panel" style={{ width: 800}}>
        <div className="header">
          <h1>Лучшие студенты ГГКИТ</h1>
          <p>Учебный год 2024/2025</p>
        </div>

        <div className="student-cont grid-3">
          <StudentColumn title="1 курс" students={course1} />
          <StudentColumn title="2 курс" students={course2} />
          <StudentColumn title="3 курс" students={course3} />
        </div>
      </div>
    </div>
  );
};

export default Courses_12;

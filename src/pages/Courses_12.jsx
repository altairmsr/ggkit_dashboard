import course1 from "../data/course1";
import course2 from "../data/course2";
import course3 from "../data/course3";

const Courses_12 = () => {
  return (
    <div className="page">
      <div className="top-panel" style={{ width: 800}}>
        <div className="header">
          <h1>Лучшие студенты ГГКИТ</h1>
          <p>Учебный год 2024/2025</p>
        </div>

        <div className="student-cont grid-3">
          <div className="student-col">
            <h3>1 курс</h3>
            {course1.map((student) => (
              <div
                key={student.id + 1}
                className={`student-card ${
                  student.id + 1 <= 3 ? "top-3" : ""
                } ${
                  student.id == 0
                    ? "gold"
                    : student.id == 1
                    ? "silver"
                    : student.id == 2
                    ? "bronze"
                    : ""
                }`}
              >
                <p className="student-name">
                  {student.id + 1}. {student.name}
                </p>
                <div className="student-score-cont">
                  <span className="student-score-label">{student.group}</span>
                  <span className="student-score-value">
                    {student.gpa.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="student-col">
            <h3>2 курс</h3>

            {course2.map((student) => (
              <div
                key={student.id + 1}
                className={`student-card ${
                  student.id + 1 <= 3 ? "top-3" : ""
                } ${
                  student.id == 0
                    ? "gold"
                    : student.id == 1
                    ? "silver"
                    : student.id == 2
                    ? "bronze"
                    : ""
                }`}
              >
                <p className="student-name">
                  {student.id + 1}. {student.name}
                </p>
                <div className="student-score-cont">
                  <span className="student-score-label">{student.group}</span>
                  <span className="student-score-value">
                    {student.gpa.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div><div className="student-col">
            <h3>2 курс</h3>

            {course2.map((student) => (
              <div
                key={student.id + 1}
                className={`student-card ${
                  student.id + 1 <= 3 ? "top-3" : ""
                } ${
                  student.id == 0
                    ? "gold"
                    : student.id == 1
                    ? "silver"
                    : student.id == 2
                    ? "bronze"
                    : ""
                }`}
              >
                <p className="student-name">
                  {student.id + 1}. {student.name}
                </p>
                <div className="student-score-cont">
                  <span className="student-score-label">{student.group}</span>
                  <span className="student-score-value">
                    {student.gpa.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="student-col">
            <h3>3 курс</h3>

            {course3.map((student) => (
              <div
                key={student.id + 1}
                className={`student-card ${
                  student.id + 1 <= 3 ? "top-3" : ""
                } ${
                  student.id == 0
                    ? "gold"
                    : student.id == 1
                    ? "silver"
                    : student.id == 2
                    ? "bronze"
                    : ""
                }`}
              >
                <p className="student-name">
                  {student.id + 1}. {student.name}
                </p>
                <div className="student-score-cont">
                  <span className="student-score-label">{student.group}</span>
                  <span className="student-score-value">
                    {student.gpa.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses_12;

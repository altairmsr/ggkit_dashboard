import { studList as students } from "../data/studList";

const App = () => {
  return (
    <div className="page">
      <div className="top-panel">
        <div className="header">
          <h1>ТОП-20 лучших студентов</h1>
          <p>Учебный год 2024/2025</p>
        </div>

        <div className="student-cont grid-2">
          {students.map((student) => (
            <div
              key={(student.id + 1)}
              className={`student-card ${student.id + 1 <= 3 ? "top-3" : ""} ${
                student.id == 0
                  ? "gold"
                  : student.id == 1
                  ? "silver"
                  : student.id == 2
                  ? "bronze"
                  : ""
              }`}
            >
              <p className="student-name">{student.id + 1}. {student.name}</p>
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
  );
};

export default App;

import React from "react";
import { studList as students } from "../data/studList";
import StudentCard from "../components/StudentCard/StudentCard";
import Layout from "../components/Layout/Layout";
import { useStudents } from "../hooks/useData";

const Students = () => {
  const normalizedStudents = useStudents(students);

  return (
    <Layout title="ТОП-20 лучших студентов">
      <div className="student-cont grid-2">
        {normalizedStudents.map((student, index) => (
          <StudentCard key={student.id} student={student} index={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Students;

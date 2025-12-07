import React from "react";
import Layout from "../components/Layout/Layout";

const ComingSoon = () => {
  return (
    <Layout title="Итоги" width={700} noTableStyle={true}>
      <div className="coming-soon-content">
        <div className="announcement-card">
          <div className="announcement-icon">
            <span>🏆</span>
          </div>
          <h2>Скоро</h2>
          <p className="announcement-text">
            По итогам зачётов, экзаменов и оценок скоро будут подведены итоги
            лучших студентов 1 семестра 2025-2026 учебного года
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoon;

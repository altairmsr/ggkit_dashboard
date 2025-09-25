import React from "react";
import Layout from "../components/Layout/Layout";

const ComingSoon = () => {
  return (
    <Layout title="Новые возможности" width={700} noTableStyle={true}>
      <div className="coming-soon-content">
        <div className="announcement-card">
          <div className="announcement-icon">
            <span>🏆</span>
          </div>
          <h2>Скоро</h2>
          <p className="announcement-text">
            Здесь со следующей недели будет рейтинг студентов с лучшими
            результатами
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoon;

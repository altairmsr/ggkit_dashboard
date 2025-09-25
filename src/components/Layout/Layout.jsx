import React from "react";

const Layout = ({
  children,
  title,
  subtitle = "Учебный год 2024/2025",
  width = 650,
}) => {
  return (
    <div className="page">
      <div className="top-panel" style={{ width }}>
        <div className="header">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;

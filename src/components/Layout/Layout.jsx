import React from "react";

const Layout = ({
  children,
  title,
  subtitle = "Учебный год 2025/2026 (на основе данных из дневник.ру)",
  width = 650,
  noTableStyle = false,
}) => {
  if (noTableStyle) {
    return (
      <div className="page">
        <div className="custom-panel" style={{ width }}>
          <div className="header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    );
  }

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

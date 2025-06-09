import React from "react";

const Info = () => {
  return (
    <div
      className="cont_top"
      style={{
        textAlign: "center",
        padding: "0 30px",
        fontSize: "2.5em",
        color: "#111",
        backgroundImage: "linear-gradient(135deg, #4568DC, #B06AB3)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>
        Приветствуем участников отборочного этапа национального чемпионата
        <span style={{ color: "white" }}> Абилимпикс 2025</span>
      </h3>
    </div>
  );
};

export default Info;

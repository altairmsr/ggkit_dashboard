import React, { useRef, useEffect } from "react";
import "./RedList.scss";

const CarouselItem = ({ items, duration = 50 }) => {
  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-content"
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={item.id} className="carousel-item">
            {item.id}. {item.name} - {item.group}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselItem;

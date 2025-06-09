import React, { useEffect, useState } from "react";
import style from "./Punishment.module.scss";

const Punishment2 = () => {
  const startId = 8585;
  const endId = 8686;

  const numberList = Array.from(
    { length: endId - startId + 1 },
    (_, i) => startId + i
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % numberList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [numberList.length]);

  return (
    <section className={style.page}>
      <div className={style.cont}>
        <h2>Галерея Абилимпикс</h2>
        {numberList.map((id, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === numberList.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={style[position]}>
              <img src={`/assets/abl/IMG_${id}.JPG`} alt={`punishment-${id}`} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Punishment2;

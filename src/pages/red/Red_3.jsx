import React from "react";
import style from "./Red3.module.scss";

const Red_3 = () => {
    return (
        <>
            {/* <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            >
                <source src="/assets/GGKIT.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video> */}
            <div className={style.red}>
                <img src="./assets/red/khalid2.jpeg" alt="" />
            </div>
        </>
    );
};

export default Red_3;

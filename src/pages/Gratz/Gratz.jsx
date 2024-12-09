import React from "react";
import style from "./Gratz.module.scss";
import img from "../../../public/assets/anno_0912.jpeg";

const Gratz = () => {
	return (
		<div className="cont_top">
			<div className={style.gratz_cont}>
				<h3>Поздравляем участников Всероссийского турнира по БАС <br /> студенты группы БАС1.24-11</h3>
        <img src={img} alt="img" />
			</div>
		</div>
	);
};

export default Gratz;

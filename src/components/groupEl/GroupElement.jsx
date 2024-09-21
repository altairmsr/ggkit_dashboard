import React from "react";
import style from "./GroupElement.module.scss";

const GroupElement = ({ id, group, img = null, pos }) => {
	return (
		<div className={`${style.group} ${pos}`}>
			<h5>
				{++id}. {group}
			</h5>
			{img && <img src={`/assets/${pos}.png`} alt="" />}
		</div>
	);
};

export default GroupElement;

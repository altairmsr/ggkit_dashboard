import React from "react";
import style from "./ListElement.module.scss";

const ListElement = ({ id, group, name, img = null, pos }) => {
	return (
		<div className={`${style.group_top} ${pos}`}>
			<h5>
				{++id}. {group} {name}
			</h5>
			{img && <img src={`../public/assets/${pos}.png`} alt="" />}
		</div>
	);
};

export default ListElement;

import React from "react";

const ListElement = ({ id, group, name, img = null, pos }) => {
	let path = "./assets/";

	return (
		<div className={`group_top ${pos}`}>
			<h5 className="group_text">
				{++id}. {group} {name}
			</h5>
			{img && <img src={`./src/assets/${pos}.png`} alt="" />}
		</div>
	);
};

export default ListElement;

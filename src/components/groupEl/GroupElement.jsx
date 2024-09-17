import React from "react";

const GroupElement = ({ id, group, img = null, pos }) => {
	let path = "./assets/";

	return (
		<div className={`group ${pos}`}>
			<h5 className="group_text">
				{++id}. {group}
			</h5>
			{img && <img src={`./src/assets/${pos}.png`} alt="" />}
		</div>
	);
};

export default GroupElement;

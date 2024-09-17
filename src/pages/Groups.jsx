import React from "react";
import GroupElement from "../components/groupEl/GroupElement";
import groupList from "../data/groupList";

const Groups = () => {
	return (
		<div className="cont">
			<div className="group_cont">
				<h3>Топ 5 групп недели</h3>
				{groupList.map((el) => (
					<GroupElement
						key={el.id}
						id={el.id}
						group={el.group}
						img={el.img}
						pos={el.pos}
					/>
				))}
			</div>
		</div>
	);
};

export default Groups;

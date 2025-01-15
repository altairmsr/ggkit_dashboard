import React from "react";
import ListElement from "../components/listEl/ListElement";
import studList from "../data/studList";

const Students = () => {
	return (
		<div className="cont_top">
			<div className="stud_cont">
				<h3>Лучшие студенты по итогам 1 семестра</h3>
				{studList.map((el) => (
					<ListElement
						key={el.id}
						id={el.id}
						group={el.group}
						name={el.name}
						img={el.img}
						pos={el.pos}
					/>
				))}
			</div>
		</div>
	);
};

export default Students;

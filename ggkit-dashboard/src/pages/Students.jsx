import React from "react";
import ListElement from "../components/listEl/ListElement";
import studList from "../data/studList";
import { Link } from 'react-router-dom';

const Students = () => {
	return (
		<div className="cont_top">
			<div className="stud_cont">
				<Link to="/groups">Группы</Link>
				<h3>Топ студентов недели</h3>
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

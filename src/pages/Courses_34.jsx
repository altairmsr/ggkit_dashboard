import React from "react";
import ListElement from "../components/listEl/ListElement";
import course3 from "../data/course3";
import course4 from "../data/course4";

const Courses_34 = () => {
	return (
		<div className="cont_top">
			<div className="top_list">
				<div className="top">
					<h3>3 курс</h3>
					{course3.map((el) => (
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
				<div className="top">
					<h3>4 курс</h3>
					{course4.map((el) => (
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
		</div>
	);
};

export default Courses_34;

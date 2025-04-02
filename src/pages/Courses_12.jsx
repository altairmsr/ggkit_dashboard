import React from "react";
import ListElement from "../components/listEl/ListElement";
import course1 from "../data/course1";
import course2 from "../data/course2";
import course3 from "../data/course3";
import course4 from "../data/course4";

const Courses_12 = () => {
	return (
		<div className="cont_top">
			<div className="top_list">
				<div className="top">
					<h3>1 курс</h3>
					{course1.map((el) => (
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
					<h3>2 курс</h3>
					{course2.map((el) => (
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
			</div>
		</div>
	);
};

export default Courses_12;

import React, { useEffect, useState } from "react";
import style from "./Punishment.module.scss";

const Punishment = () => {
	let slideEl = [
		{
			name: "Дикаев Делимбек Муслимович",
			group: "О1.23-24"
		}, 
		{
			name: "Дикаев Мяхди Супьянович",
			group: "БАС1.24-11"
		},
		{
			name: "Тукаев Абдул-Рахман Асланович",
			group: "О2.24-11"
		},
		{
			name: "Шахидов Мимолт Магомедович",
			group: "БАС1.24-11"
		},
		{
			name: "Хажмурадов Ахмед Рустамович",
			group: "Э3.23-21"
		},
		{
			name: "Байтулаев Ибрагим Исаевич",
			group: "И2.23-21"
		},
		{
			name: "Салатаев Тамерлан Лечиевич",
			group: "ИБ1.24-11"
		},
		{
			name: "Халадов Ахмед Разамбекович",
			group: "И2.23-21"
		},
	];

	const [people, setPeople] = useState(slideEl);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<section className={style.page}>
			<div className={style.cont}>
				<h2>Дисциплинарные взыскания 2025</h2>
				{people.map((person, personIndex) => {
					const { id } = person;
					let position = "nextSlide";
					if (personIndex === index) {
						position = "activeSlide";
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = "lastSlide";
					}
					return (
						<article key={id} className={style[position]}>
							<img src={`/assets/scans/pun${personIndex + 1}.jpg`} alt={person} />
							<span>
								Страница {personIndex + 1} из {people.length}
							</span>
							<span>
								{person.name} - {person.group}
							</span>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Punishment;

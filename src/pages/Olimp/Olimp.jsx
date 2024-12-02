import React, { useEffect, useState } from "react";
import style from "./Olimp.module.scss";
import slideEl from "../../data/olimpList";

const Olimp = () => {
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

	// autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 10000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<section className={style.page}>
			<div className="snow"></div>

			<div className={style.cont}>
				<h2>Итоги Олимпиады</h2>
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
							<h3>{person[0]}</h3>
							{person[1].map((el, id) => (
								<div
									className={`${style.olimp_el_cont} ${
										Array.isArray(el.name) ? style.olimp_el_list : ""
									} ${
										el.pos == 1
											? style.gold
											: el.pos == 2
											? style.silver
											: style.bronze
									}`}
								>
									<span>{el.pos}</span>
									{Array.isArray(el.name) ? (
										el.name.map((elem, id) => (
											<div className={style.olimp_list}>
												<span>{elem}</span>
												<span>{el.group[id]}</span>
											</div>
										))
									) : (
										<div className={style.olimp_name}>
											<span>{el.name}</span>
											<span>{el.group}</span>
										</div>
									)}
									<span>Баллы: {el.score}</span>
								</div>
							))}
							<span>
								Страница {personIndex + 1} из {people.length}
							</span>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Olimp;

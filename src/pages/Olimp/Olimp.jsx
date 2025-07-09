import { useState } from "react";
import style from "./Olimp.module.scss";
import slideEl from "../../data/olimpList";
import { useSlideshow } from "../../hooks/useSlideshow";

const Olimp = () => {
	const [people] = useState(slideEl);
	const { getSlidePosition } = useSlideshow(people, 10000);

	return (
		<section className={style.page}>
			<div className={style.cont}>
				<h2>Итоги Олимпиады</h2>
				{people.map((person, personIndex) => {
					const { id } = person;
					const position = getSlidePosition(personIndex);

					return (
						<article key={id} className={style[position]}>
							<h3>{person[0]}</h3>
							{person[1].map((el, elIndex) => (
								<div
									key={elIndex}
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
										el.name.map((elem, nameIndex) => (
											<div key={nameIndex} className={style.olimp_list}>
												<span>{elem}</span>
												<span>{el.group[nameIndex]}</span>
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

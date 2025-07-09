import { useSlideshow } from "../../hooks/useSlideshow";
import style from "./Gallery.module.scss";

/**
 * Reusable Gallery component for displaying images in a slideshow
 * @param {Object} props - Component props
 * @param {number} props.startId - Starting ID for image range
 * @param {number} props.endId - Ending ID for image range
 * @param {string} props.title - Gallery title
 * @param {number} props.interval - Slideshow interval in milliseconds (default: 3000)
 * @returns {JSX.Element} - Gallery component
 */
const Gallery = ({ startId, endId, title, interval = 3000 }) => {
  const numberList = Array.from(
    { length: endId - startId + 1 },
    (_, i) => startId + i
  );

  const { getSlidePosition } = useSlideshow(numberList, interval);

  return (
    <section className={style.page}>
      <div className={style.cont}>
        <h2>{title}</h2>
        {numberList.map((id, personIndex) => {
          const position = getSlidePosition(personIndex);

          return (
            <article key={id} className={style[position]}>
              <img src={`/assets/abl/IMG_${id}.JPG`} alt={`punishment-${id}`} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
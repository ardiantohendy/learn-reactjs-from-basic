import PropTypes from "prop-types"; // Tambahkan ini
import style from "./Card.module.css";

//module styling format css

function Card(props) {
  return (
    <div className={style.cardParent}>
      {props.listObj.map((item, index) => (
        <div className={style.card} key={index}>
          <img src={item.img} alt="profile picture" />
          <h2>{item.name}</h2>
          <p>{item.about}</p>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  listObj: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;

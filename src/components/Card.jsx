import img1 from "../assets/image/profile.jpg";
import img2 from "../assets/image/vanad.jpg";
import img3 from "../assets/image/windi.jpg";

const listObj = [
  {
    img: img1,
    name: "Hendy Dwi Bayu",
    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatibus illo delectus veniam odit.",
  },
  {
    img: img2,
    name: "Vanadya Decembry",
    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatibus illo delectus veniam odit.",
  },
  {
    img: img3,
    name: "Windi Puspa",
    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatibus illo delectus veniam odit.",
  },
];

function Card() {
  return (
    <div className="cardParent">
      {listObj.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt="profile picture" />
          <h2>{item.name}</h2>
          <p>{item.about}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;

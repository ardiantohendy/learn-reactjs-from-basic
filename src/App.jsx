import "./App.css";
import Card from "./components/card/Card";
import img1 from "./assets/image/profile.jpg";
import img2 from "./assets/image/vanad.jpg";
import img3 from "./assets/image/windi.jpg";

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

function App() {
  return (
    <div className="container">
      <Card listObj={listObj} />
    </div>
  );
}

export default App;

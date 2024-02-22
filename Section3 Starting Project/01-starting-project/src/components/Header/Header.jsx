import ReactImg from "../../assets/react-core-concepts.png";
import HeaderCss from "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  let description = reactDescriptions[getRandomIndex(2)];
  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

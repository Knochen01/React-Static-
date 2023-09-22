import logo from "../assets/React-Icon.png";
import "../navbarStyle.css";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <img className="image" src={logo} alt="" />
        <span className="blue">ReactFacts</span>
        <div className="project1">React Course - Project 1</div>
      </nav>
    </div>
  );
}

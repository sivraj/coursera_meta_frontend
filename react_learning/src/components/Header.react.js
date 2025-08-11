import logo from "../logo.svg";
import Nav from "./Nav.react";
import "../Header.css";

const Logo = () => <img src={logo} alt="Logo" width={100} />;

export default function Header({ name }) {
  return (
    <header>
      <div className="flex">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

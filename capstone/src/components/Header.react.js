import Nav from "./Nav.react";
import logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-primary border-b">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
      <Nav />
    </header>
  );
}

// import logo from './logo.svg';
import "./App.css";
import About from "./components/About/About.react";
import Header from "./components/Header.react";
import Home from "./components/Home/Home.react";
import ThemeProvider from "./providers/ThemeProvider";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Header name="Sivaraj" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.react";
import Landing from "./components/Landing";
import Menu from "./components/Menu.react";
import Footer from "./components/Footer.react";
import About from "./components/About.react";
import Reservation from "./components/Reservation.react";
import SuccessReservation from "./components/SuccessReservation.react";

function App() {
  const location = useLocation();
  const hideFooterOnPaths = ["/"];
  // Check if the current path is in our "hide" list
  const shouldHideFooter = hideFooterOnPaths.includes(location.pathname);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/reservation_success" element={<SuccessReservation />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;

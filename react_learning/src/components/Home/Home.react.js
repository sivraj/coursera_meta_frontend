import { useThemeContext } from "../../providers/ThemeProvider";
import Footer from "../Footer.react";
import Intro1 from "./Intro1.react";
import Intro2 from "./Intro2.react";
import Intro3 from "./Intro3.react.";
import Promo from "./Promo.react";

export default function Home() {
  const { toggleTheme } = useThemeContext();
  return (
    <>
      <button onClick={toggleTheme}>toggleTheme</button>
      <main>
        <Promo />
        <div className="blog-post-intros">
          <Intro1 />
          <Intro2 />
          <Intro3 />
        </div>
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import AboutComp from "./components/AboutComp/AboutComp";
import Carousel from "./components/Carousel/Carousel";
import Main from "./components/main/Main";
import Mission from "./components/Misson/Mission";
import History from "./components/History/History";
import "./Home.css";

function Home() {
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>

      <Carousel lang={lang} />
      <AboutComp lang={lang} />
      <Mission lang={lang} />
      <Main />
      <History lang={lang} />

    </div>
  );
}

export default Home;

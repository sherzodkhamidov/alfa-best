import React from "react";
import TransInfo from "./components/TransInfo/TransInfo";
import Menu from "../../components/Menu/Menu";
import TransCategory from "./components/TransCategory/TransCategory";
import Main from "../Home/components/Main/Main";
import TransMain from "./components/TransMain/TransMain";
import Gallery from "../Career/components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import "./Transportation.css"
function Transportation() {
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>

      <TransInfo lang={lang} />
      <TransCategory lang={lang} />
      <Main lang={lang} />
      < TransMain lang={lang} />
      < Gallery lang={lang}  />
      <div className="transfoot">

      </div>
    </div>
  );
}

export default Transportation;

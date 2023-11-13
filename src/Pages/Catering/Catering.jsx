import React from "react";
import Menu from "../../components/Menu/Menu";
import Main from "../Home/components/Main/Main";
import Gallery from "../Career/components/Gallery/Gallery"
import Footer from "../../components/Footer/Footer";
import CateringInfo from "./components/CateringInfo"
import CateringCategory from "./components/CateringCategory";
import CateringMain from "./components/cateringMain";

function Catering() {
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>

< CateringInfo lang={lang} />
< CateringCategory lang={lang}/>
      <Main lang={lang} />
< CateringMain lang={lang} />
      <Gallery lang={lang} />
      <div className="transfoot">

      </div>
    </div>
  );
}

export default Catering;

import React from "react";
import CooperationInfo from "./components/CooperationInfo/CooperationInfo";
import Menu from "../../components/Menu/Menu";
import "./Cooperation.css"
import Footer from '../../components/Footer/Footer';
import CooperationCategory from "./components/CooperationCategory/CooperationCategory"
function Cooperation() {
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>
      <CooperationInfo lang={lang} />
      < CooperationCategory lang={lang} />

    </div>
  );
}

export default Cooperation;

import React from "react";
import background from "../../../../assets/background.png"
import "./Main.css";

function Main() {
  const lang = localStorage.getItem("lang") || "ru";
  let yozuv = lang === "ru" ? "Наши партнеры довольны нами" : "Mijozlar bilan professional ishlash"
  let yozuv2 = lang === "ru" ? "Если вас заинтересовали наши услуги, станьте нашим партнером и получите премиальные услуги" : "Agar sizga biz bilan hamkorlik qilish qiziq bo'lsa, bizga murojaat eting!"
  return (
    <div className="main">
      <div className="fon">
      <img className="back" src={background} alt="" />
      </div>
      <div className="main2">
        <div className="forborder">
          <p className="tittle">{yozuv}</p>
        </div>
        <p className="texxt">
         {yozuv2}
        </p>
      </div>
    </div>
  );
}

export default Main;

import React from "react";
import bro1 from "../../../../assets/bro1.png"
import bro2 from "../../../../assets/bro2.png"
import bro3 from "../../../../assets/bro3.png"
import bro4 from "../../../../assets/bro4.png"

import "./Category.css";

function Category() {
  const lang = localStorage.getItem("lang") || "ru";

  let li7 =
    lang === "ru"
      ? "Сервисное и бытовое обслуживание"
      : "Xizmat ko'rsatish va maishiy xizmat ko'rsatish";
  let li8 = lang === "ru" ? "Корпоративное питание" : "Korporativ ovqatlanish";
  let li9 =
    lang === "ru" ? "Транспортные перевозки" : "Transport va yo'lovchi tashish";
  let li10 =
    lang === "ru"
      ? "Инженерно-техническая эксплуатация"
      : "Muhandislik va texnik ekspluatatsiya";

      let podr = lang === "ru" ? "Подробно" : "Batafsil";
  return (
    <div className="cat">
      <div className="category">
        <div className="kat">
          <div className="width">
            <div className="ttitle">{li10}</div>
            <div className="strel">
              <p className="podr">{podr}</p>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <div>
            <img src={bro1} alt="rasm" />
          </div>
        </div>
        <div className="kat">
          <div className="width">
            <div className="ttitle">{li7}</div>
            <div className="strel">
              <p className="podr">{podr}</p>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <div>
            <img src={bro2} alt="rasm" />
          </div>
        </div>
        <div className="kat">
          <div className="width">
            <div className="ttitle">{li8}</div>
            <div className="strel">
              <p className="podr">{podr}</p>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <div>
            <img src={bro3} alt="rasm" />
          </div>
        </div>
        <div className="kat">
          <div className="width">
            <div className="ttitle">{li9}</div>
            <div className="strel">
              <p className="podr">{podr}</p>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <div>
            <img src={bro4} alt="rasm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;

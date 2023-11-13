import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AboutComp.css";
import foto from "../../../../assets/foto.png"
import logo from "../../../../assets/logo.png"
import icon1 from "../../../../assets/icon1.png"
import icon2 from "../../../../assets/icon2.png";
import icon3 from "../../../../assets/icon3.png";
import icon4 from "../../../../assets/icon4.png";
import { useQuery } from 'react-query';

function AboutComp({ lang }) {
  const { data, isLoading, isError, error } = useQuery(["aboutCompany"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/about_company", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return;
  let knopka = lang === "ru" ? "Узнать больше" : "Batafsil"
  let tekst11 = lang === "ru" ? "Площади объектов благоустройства" : "Ob'ektlarni obodonlashtirish sohalari";
  let tekst12 = lang === "ru" ? "Площади объектов клининга" : "Tozalash inshootlari joylari";
  let tekst13 = lang === "ru" ? "Питающихся" : "Ovqatlanish";
  let tekst14 = lang === "ru" ? "Сотрудников" : "Hodimlar";
  return (
    <div className="abcomp">
      <div>
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.home_title_ru : itm.home_title_uz;
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          return (
            <div key={itm.id} className="wiki">
              <img className="foto" src={foto} alt="rasm" />
              <div className="about">
                <img src={logo} alt="rasm" />
                <h1>{title}</h1>
                <p
                  dangerouslySetInnerHTML={{ __html: text }}
                  className="wiki1"
                ></p>
                <button className="btn1">{knopka}</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="icons">
        <div>
          <div className="qwe">
            <img className="icon" src={icon1} alt="icon" />
            +320.000кв.м
          </div>
          <div className="tekst">{tekst11}</div>
        </div>
        <div>
          <div className="qwe">
            <img className="icon" src={icon2} alt="icon" />
            +70.000кв.м
          </div>
          <div className="tekst">{tekst12}</div>
        </div>
        <div>
          <div className="qwe">
            <img className="icon" src={icon3} alt="icon" />
            +1500{" "}
          </div>
          <div className="tekst">{tekst13}</div>
        </div>
        <div>
          <div className="qwe">
            <img className="icon" src={icon4} alt="icon" />
            +600
          </div>
          <div className="tekst">{tekst14}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;

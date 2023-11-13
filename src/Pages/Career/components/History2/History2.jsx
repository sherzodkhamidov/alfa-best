import React, { useEffect, useState } from "react";
import "./History2.css";
import logo from "../../../../assets/logo.png"
import axios from "axios";
import reshetka from "../../../../assets/reshetka.png"
import { useQuery } from 'react-query';

function History2({ lang }) {
  const { data, isLoading, isError, error } = useQuery(["mission"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/mission", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="mission3">
      <div>
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          let subtitle = lang === "ru" ? itm.subtitle_ru : itm.subtitle_uz;
          return (
            <div key={itm.id} className="history2">
              <div className="center">
                <img src={logo} alt="rasm" />
                <p className="theme">{title}</p>
                <p
                  className="textt4"
                  dangerouslySetInnerHTML={{ __html: text }}
                ></p>
              </div>
              <div className="symbol">
                <p className="slogan">{subtitle}</p>
              </div>
              <img className="reshetka" src={reshetka} alt="rasm" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History2;

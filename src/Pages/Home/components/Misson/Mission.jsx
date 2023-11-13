import React, { useEffect, useState } from "react";
import "./Mission.css";
import logo from "../../../../assets/logo.png"
import axios from "axios";
import OutSource from "../OutSorce/OutSource";
import { useQuery } from 'react-query';

function Mission({ lang }) {
  
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
  if (isLoading) return;

  return (
    <div className="mission">
      <div>
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          return (
            <div key={itm.id} className="mission1">
              <img src={logo} alt="rasm" />
              <div>
              <p className="theme">{title}</p>
              <p className="textt" dangerouslySetInnerHTML={{ __html: text }}></p>
              </div>
            </div>
          );
        })}
      </div>
      < OutSource lang={lang} />
    </div>
  );
}

export default Mission;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Vacation2 from "../Vacation2/Vacation2";
import "./Vacation.css";
import { useQuery } from 'react-query';

function Vacation({ lang }) {
 
  const { data, isLoading, isError, error } = useQuery(["vacancy"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/vacancy", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return ;
  return (
    <div>
      <div>
        {data?.datas?.map((itm) => {
          let text =
            lang === "ru"
              ? "Наши вакансии (ссылка на страницу в HH)"
              : "Bizaning vakansiyalarimiz (Head Hunter uz )";
          let link = itm.link;
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          return (
            <div className="box" key={itm.id}>
              <div>
                <p className="vac-text">{text}</p>
              <a href={`/${itm.link}`}>{link}</a>
              </div>
              <p className="vac-text">{title}</p>
            </div>
          );
        })}
      </div>
      < Vacation2 lang={lang} />
    </div>
  );
}

export default Vacation;

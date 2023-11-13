import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Zakupki2.css";
import { useQuery } from 'react-query';

function Zakupki2({ lang }) {
  const { data, isLoading, isError, error } = useQuery(["zakupki2"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/purchase", {
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
    <div>
      <div className="birnima">
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          return (
            <div key={itm.id}>
              <div className="pur-all2">
                <p className="pur-title2">{title}</p>
                <p className="pur-text2">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Zakupki2;

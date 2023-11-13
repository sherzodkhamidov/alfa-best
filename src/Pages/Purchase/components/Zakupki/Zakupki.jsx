import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Zakupki.css";
import { useQuery } from 'react-query';
import loader from "../../../../assets/loader1.svg"

function Zakupki({ lang }) {
 
  const { data, isLoading, isError, error } = useQuery(["zakupki"], () => {
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
  if (isLoading) return <div className="loader1"><img src={loader} alt="rasm" /></div>;
  return (
    <div>
      <div>
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          return (
            <div key={itm.id}>
              <div className="pur-all">
                <p className="pur-title">{title}</p>
                <p className="pur-text">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Zakupki;

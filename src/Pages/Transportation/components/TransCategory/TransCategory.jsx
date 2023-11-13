import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TransCategory.css";
import smallLogo from "../../../../assets/smallLogo.png"
import { useQuery } from 'react-query';

function TransInfo({ lang }) {
  const { data, isLoading, isError, error } = useQuery(["advantage"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/advantage", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;
  const slicedData = data?.datas?.slice(18, 22);
  let title =
    lang === "ru"
      ? "Система состоит из четырех основных компонентов."
      : "Tizim to'rtta asosiy komponentdan iborat.";
  return (
    <div className="trans-ham">
        <div>
          <p className="transp-title">{title}</p>
        </div>
      <div className="trans-div">
        {slicedData.map((itm) => {
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          return (
            <div>
              <div key={itm.id}>
                <div className="trans-small">
                  <img src={smallLogo} alt="" />
                  <p>{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TransInfo;

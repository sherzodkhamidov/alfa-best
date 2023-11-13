import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TransMain.css";
import smallLogo from "../../../../assets/smallLogo.png"
import { useQuery } from 'react-query';

function TransInfo({ lang }) {
 
  const { data, isLoading, isError, error } = useQuery(["goalcategory"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/goal_category", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;
  let title =
    lang === "ru"
      ? "Наши преимущества"
      : "Bizning talablarimiz";
  return (
    <div className="transmain">
        <div>
          <p className="transp-title">{title}</p>
        </div>
      <div className="trans-div">
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          return (
            <div>
              <div key={itm.id}>
                <div className="trans-small">
                  <img src={smallLogo} alt="" />
                  <p>{title}</p>
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

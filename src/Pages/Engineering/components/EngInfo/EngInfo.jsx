import axios from "axios";
import React, { useEffect, useState } from "react";
import Engback from "../../../../assets/Engback.png"
import "./EngInfo.css";
import { useQuery } from 'react-query';
import loader from "../../../../assets/loader1.svg"

function EngInfo({ lang }) {
  const Index = 0;
 
  const { data, isLoading, isError, error } = useQuery(["enginfo"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/services_category", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <div className="loader1"><img src={loader} alt="rasm" /></div>;

  const oneArray = data?.datas?.[Index] || null;

  return (
    <div className="trans-all">
      <div className="transportBack">
        <img src={Engback} alt="rasm" />
      </div>
      <div>
        {oneArray && (
          <div key={oneArray.id}>
            <div className="trans-text">
              <p className="trans-title">
                {lang === "ru" ? oneArray.title_ru : oneArray.title_uz}
              </p>
              <p
                className="trans-text1"
                dangerouslySetInnerHTML={{ __html: lang === "ru" ? oneArray.text_ru : oneArray.text_uz }}
              ></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EngInfo;

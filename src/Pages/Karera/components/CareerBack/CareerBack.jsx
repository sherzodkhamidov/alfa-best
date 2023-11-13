import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CareerBack.css";
import careerback from "../../../../assets/careerback.png"
import logo from "../../../../assets/logo.png"
import { useQuery } from 'react-query';
import loader from "../../../../assets/loader1.svg"

function CareerBack({ lang }) {
 
  const { data, isLoading, isError, error } = useQuery(["karera"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/carrier", {
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
    <div className="media-career">
      <div className="car-rasm">
        <img src={careerback} alt="rasm" />
      </div>
      <div>
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          let text = lang === "ru" ? itm.content_ru : itm.content_uz;
          let imageTitle =
            lang === "ru" ? itm.image_title_ru : itm.image_title_uz;
          return (
            <div key={itm.id} className="car-all">
              <div className="car-div2">
                <p className="car-img">{imageTitle}</p>
              </div>

              <div className="car-text2">
                <div>
                  <img src={logo} alt="rasm" />
                  <p className="car-title">{title}</p>
                </div>
                <div className="car-div">
                  <p className="car-text">{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CareerBack;

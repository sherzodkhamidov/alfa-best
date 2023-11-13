import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CooperationInfo.css";
import odamchala from "../../../../assets/odamchala.png"
import { useQuery } from 'react-query';
import loader from "../../../../assets/loader1.svg"

function CooperationInfo({ lang }) {
  
  const { data, isLoading, isError, error } = useQuery(["cooperation"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/cooperation", {
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
    <div className="coo-all">
      <div className="coo-img">
        <img src={odamchala} alt="rasm" />
      </div>
      <div>
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          let text = lang === "ru" ? "Компания Альфа-бест будет рада сотрудничеству с промышленными предприятиями, торговыми центрами, компаниями крупного и среднего бизнеса в области комплексного оказания услуг" : `"Alfa-best" kompaniyasi sanoat korxonalari, savdo markazlari, yirik va o'rta biznes bilan kompleks xizmatlar ko'rsatish sohasida hamkorlik qilishdan mamnun bo'ladi.`;
          return (
            <div key={itm.id} className="qwerty">
              <div className="coo-text">
                <div>
                  <p className="coo-title">{title}</p>
                </div>
                <div>
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

export default CooperationInfo;

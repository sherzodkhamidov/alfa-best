import axios from "axios";
import React from "react";
import "./Service.css";
import { useQuery } from 'react-query';
import { Link } from "react-router-dom";

function Service({ lang }) {
  const { data, isLoading, isError, error } = useQuery(["Service"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/home_service", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return;
// console.log(data)
  return (
    <div className="service1">
      <ul>
        <div className="service2">
          {data?.datas?.map((itm) => {
            let title;
            if (lang === "ru") {
              title = itm.title_ru;
            } else if (lang === "uz") {
              title = itm.title_uz;
            }
            return (
              <div key={itm.id} className="servicee">
                <li className="service" key={itm.id}>
                  <Link to={`/${itm.link}`}>{title}</Link>
                </li>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default Service;

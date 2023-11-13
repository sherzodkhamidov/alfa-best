import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Vacation2.css";

function Vacation2({ lang }) {
  const baseUrl = "https://back.alfabestservis.uz/api/vacancy_category";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl, {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((response) => {
        setData(response.data.datas);
      })
      .catch((err) => console.log(err));
  }, [lang]);
  return (
    <div>
      <div>
        {data.map((itm) => {
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          let vacancyId = itm.vacancy_id;
          return (
            <div className="box2" key={itm.id}>
              <div className="vac-big">
                <div>
                  <p className="vac-num">0{vacancyId}</p>
                </div>
                <div>
                  <p className="vac-title">{title}</p>
                  <p className="vac-text2">{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Vacation2;

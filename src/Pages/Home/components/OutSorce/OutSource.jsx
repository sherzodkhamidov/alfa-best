import axios from "axios";
import React, { useEffect, useState } from "react";
import "./OutSource.css";

function OutSource({ lang }) {
  const baseUrl = "https://back.alfabestservis.uz/api/aim_category";
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
    <div className="hamm">
      <div className="hammasi">
        {data.map((itm) => {
          let id = itm.id;
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          let image = itm.image
          return (
            <div className="out" key={itm.id}>
              <div className="outro">
              <p className="id">0{id}</p>
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
              </div>
              <img src={`https://back.alfabestservis.uz/storage/${image}`} alt="rasm" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OutSource;

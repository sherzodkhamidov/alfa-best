import axios from "axios";
import React, { useEffect, useState } from "react";
import "./History.css";
import photo from "../../../../assets/history-photo.png";
import { useQuery } from 'react-query';

function History({ lang }) {
  const [selectedYear, setSelectedYear] = useState("2018");
  const { data, isLoading, isError, error } = useQuery(["history"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/history", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.error("fetch error", err);
        throw err;
      });
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  let histtext = lang === "ru" ? "История" : "Kompaniya Tarixi";

  return (
    <div className="hist-all">
      <div className="history-text">{histtext}</div>
      <div className="history">
        {data?.datas?.map((itm) => {
          let year = itm.year;
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          if (year.toString() === selectedYear) {
            return (
              <div className="history" key={itm.id}>
                <img className="hist-foto" src={photo} alt="rasm" />
                <div>
                  <p className="year">{year}</p>
                  <p
                    className="his-text"
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></p>
                  <div className="btns">
                    <button
                      className="yearbtn"
                      onClick={() => handleYearClick("2018")}
                    >
                      2018
                    </button>{" "}
                    <button
                      className="yearbtn"
                      onClick={() => handleYearClick("2019")}
                    >
                      2019
                    </button>{" "}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
    
      </div>
    </div>
  );
}

export default History;

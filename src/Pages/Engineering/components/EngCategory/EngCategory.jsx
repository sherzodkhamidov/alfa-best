import axios from "axios";
import React, { useEffect, useState } from "react";
import "./EngCategory.css";
import { useQuery } from 'react-query';

function EngCategory({ lang }) {
 
  const { data, isLoading, isError, error } = useQuery(["engcategory"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/services_subcategory", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;
  const slicedData = data?.datas?.slice(1, 7);
  return (
    <div className="trans-ham">
      <div className="trans-div">
        {slicedData.map((itm) => {
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          let icon = itm.icon
          return (
    
              <div key={itm.id}>
                <div className="trans-small">
                  <img src={`https://back.alfabestservis.uz/storage/${itm.icon}`} alt="" />
                  <p>{text}</p>
                </div>
              </div>
         
          );
        })}
      </div>
    </div>
  );
}

export default EngCategory;

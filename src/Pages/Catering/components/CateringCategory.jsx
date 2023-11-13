import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query';

function CateringCategory({ lang }) {
  
  const { data, isLoading, isError, error } = useQuery(["cateringcategory"], () => {
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
  if (isLoading) return ;
  const slicedData = data?.datas?.slice(4, 11);
  return (
    <div className="trans-ham">
      <div className="trans-div">
        {slicedData.map((itm) => {
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          let icon = itm.icon
          return (
            <div>
              <div key={itm.id}>
                <div className="trans-small">
                  <img src={`https://back.alfabestservis.uz/storage/${itm.icon}`} alt="" />
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

export default CateringCategory;

import React, { useEffect, useState } from "react";
import "./Adress.css";
import axios from "axios";
import { useQuery } from 'react-query';

function Adress({ lang }) {
  const { data, isLoading, isError, error } = useQuery(["contactinfo"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/contact_info", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        {data?.datas?.map((itm) => {
          let address = lang === "ru" ? itm.address_ru : itm.address_uz;
          return (
            <div key={itm.id}>
              <div className="adress">
                <p>+998 77 048 77 48</p>
                <p>{address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Adress;

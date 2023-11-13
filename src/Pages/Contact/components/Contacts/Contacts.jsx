import React, { useEffect, useState } from "react";
import "./Contacts.css";
import contactBack from "../../../../assets/contactBack.png"
import PostContact from "../PostContact/PostContact";
import { useQuery } from 'react-query';
import axios from "axios";
import Adress from "../Adress/Adress";
import loader from "../../../../assets/loader1.svg"

function Contacts({ lang }) {
  
  const { data, isLoading, isError, error } = useQuery(["contactpage"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/contact_page", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <div className="loader"><img src={loader} alt="rasm" /></div>;

  return (
    <div>
      <div>
        {data?.datas?.map((itm) => {
          let title = lang === "ru" ? itm.title_ru : itm.title_uz;
          let text = lang === "ru" ? itm.text_ru : itm.text_uz;
          return (
            <div className="con-all" key={itm.id}>
              <div className="con-div">
                <p className="con-title">{title}</p>
                <p className="con-text" dangerouslySetInnerHTML={{ __html: text }}></p>
                < PostContact lang={lang}/>
                < Adress lang={lang} />
              </div>
              <div className="con-img">
                <img src={contactBack} alt="rasm" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;

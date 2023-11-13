import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Profil1 from "../../../../assets/profil1.png"
import "./Profil.css";
import { useQuery } from 'react-query';

function Profil({lang}) {
    const { data, isLoading, isError, error } = useQuery(["carrier"], () => {
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
      if (isLoading) ;
  return (
    <div className='media-img'>
        <div className='img'>
       <img src={Profil1} alt="rasm" />
        </div>
        <div>
            {data?.datas?.map((itm) => {
                let title = lang === "ru" ? itm.title_ru : itm.title_uz;
                let text = lang === "ru" ? itm.content_ru : itm.content_uz;
                return(
                    <div key={itm.id} className='texttt'>
                        <p className='textt1'>{title}</p>
                        <p className='textt2'>{text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Profil
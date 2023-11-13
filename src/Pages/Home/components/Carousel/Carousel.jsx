import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import "./Carousel.css";
import vector from "../../../../assets/vector.svg"
import { useQuery } from 'react-query';
import SwiperCore from "swiper";

SwiperCore.use([Autoplay])

function Carousel({ lang }) {
  const { data, isLoading, isError, error } = useQuery(["Carousel"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/home_content", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;
  const pagination = {
    clickable: true,
  };
let knopka = lang === "ru" ? "Узнать больше" : "Batafsil"
  return (
    <Swiper
      spaceBetween={30}
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
      autoplay={{delay : 3000}}
      
    >
      {data?.datas?.map((itm) => {
        let title = lang === "ru" ? itm.text_ru : itm.text_uz;
        return (
          <SwiperSlide className="swipeslide" key={itm.id}>
            <div
              className="carousel"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                filter: "grayscale(35%)",
                backgroundImage: `url(https://back.alfabestservis.uz/storage/${itm.img})`,
              }}
            >
              <div className="left">
                <img className="image" src={vector} alt="" />

                <div className="divcha">
                <p className="texxtt">
                  <a className="text" href={`/${itm.link}`}>{title}</a>
                </p>
              <a href=""><button className="btn1">{knopka}</button></a>
              </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;

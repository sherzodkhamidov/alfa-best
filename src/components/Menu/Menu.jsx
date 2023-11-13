import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../../assets/logo.png";
import Service from "../Service/Service";
import { Link , useLocation} from "react-router-dom";
import { useQuery } from 'react-query';
import loader from "../../assets/loader1.svg"
import {useTranslation} from "react-i18next"


function Menu({ lang }) {

  const {i18n , t} = useTranslation();
  const location = useLocation();
  const isTrue = location.pathname === "/" ? "navbar" : "navbar1"

  

  const [navbar, setNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceInModalOpen, setServiceInModalOpen] = useState(false);
  
  const toggleLanguage = () => {
    const newLang = lang === "ru" ? "uz" : "ru";
    localStorage.setItem("lang", newLang);
    window.location.reload();
  };
  
  const { data, isLoading, isError, error } = useQuery(["aboutHeader"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/home_menu", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <div className="loader1"><img className="loader" src={loader} alt="rasm" /></div>;

  window.onscroll = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleServiceInModal = () => {
    setServiceInModalOpen(!serviceInModalOpen);
  };
  // console.log(data)

  let modal12 = lang === "ru" ? "Услуги" : "Xizmatlar";
  let telegram =
    lang === "ru"
      ? "Следите в телеграмме"
      : "Telegram kanalimizga obuna bo'ling";

      const changeLanguageRu = () => {
        localStorage.setItem("lang", "ru");
        changeLanguage("ru");
      };
    
      const changeLanguageUz = () => {
        localStorage.setItem("lang", "uz");
        changeLanguage("uz");
      };

  return (
   <header className={isTrue}>
     <div className={navbar ? "all black" : "all"}>
      <div className="media-big">
      <div className="header">
        <Link to="/" className="brand">
          <img src={logo} alt="logo" />
          <p className="logoBrand">AlfaBest</p>
        </Link>
        <ul>
          <div className="bigmenu">
            {data?.datas?.map((itm) => {
              let title = lang === "ru" ? itm.title_ru : itm.title_uz;
              return (
                <li  className="menu" key={itm.id}>
                  <Link to={`/${itm.link}`}>{title}</Link>
                </li>
              );
            })}
            <li className="uzru">
              <a href="/" onClick={() => changeLanguageRu()}>
                Ru
              </a>{" "}
              |{" "}
              <a href="/" onClick={() => changeLanguageUz()}>
                Uz
              </a>
            </li>
          </div>
        </ul>
      </div>
      <Service lang={lang} />
      </div>
      <div className="media-navbar">
      <Link to="/" className="brand">
          <img src={logo} alt="logo" />
          <p  className="logoBrand">AlfaBest</p>
        </Link>
        <div className="media-head">
            <div onClick={toggleLanguage} className="media-translate">
              <i className="ri-global-line"></i>
            </div>
            <div onClick={openModal} className="media-modal">
              <i className="ri-menu-3-line"></i>
            </div>
            </div>
      {isModalOpen && (
        <div className="modall">
          <div className="modal-contentt">
            <div className="inmodal">
            <Link onClick={closeModal} to="/" className="brand">
              <img src={logo} alt="logo" />
              <p className="logoBrand">AlfaBest</p>
            </Link>
            <span className="close" onClick={closeModal}>
            <i className="ri-close-line"></i>
            </span>
            </div>
            <div className="media-just">
            <div className="moddal-big">
            <div className="moddal">
              <p>{modal12}</p>
              <p onClick={toggleServiceInModal}>+</p>
            </div>
            {serviceInModalOpen && <Service lang={lang} />}{" "}
            {data?.datas?.map((itm) => {
              let title = lang === "ru" ? itm.title_ru : itm.title_uz;
              return (
                <div onClick={closeModal} className="modal-menu" key={itm.id}>
                  <li className="menu">
                    <Link to={`/${itm.link}`}>{title}</Link>
                  </li>
                </div>
              );
            })}
            </div>
            <div>
              <p>{telegram}</p>
              <div>
                <i className="ri-telegram-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-facebook-circle-fill"></i>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
   </header>
  );
}

export default Menu;

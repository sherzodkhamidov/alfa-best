import axios from "axios";
import React, { useState } from "react";
import "./PostContact.css";
import servis from "../../../../assets/servis.png"
import { useQuery } from 'react-query';

function PostContact({ lang }) {
  const [newContact, setNewContact] = useState({
    full_name: "",
    phone: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError, error } = useQuery(["contact"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/contact", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  
  // Remove this block, as it's not needed
  // if (isError) return console.log("error:", error.message);
  // if (isLoading) return <h1>Loading...</h1>;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://back.alfabestservis.uz/api/contact", newContact, {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((response) => {
        console.log("Contact added successfully");
        setIsSuccess(true);
        openModal();
      })
      .catch((err) => {
        console.error("Failed to add contact", err);
        setIsSuccess(false);
        openModal();
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let ism =
    lang === "ru" ? "Введите свое полное имя" : "Ism Familiyangnizni kiriting";
  let telefon =
    lang === "ru"
      ? "Введите свой номер телефона"
      : "Telefon raqamingizni kiriting";
  let placeholder1 = lang === "ru" ? "Имя, фамилия" : "Ism, Familiya";
  let placeholder2 = "+998";
  let send = lang === "ru" ? "Отправить" : "Jo'natish";

  const servis1 = lang === "ru" ? "Ваша заявка успешно отправлена." : "Siz muvofaqqiyatli ro'yxatdan o'tdingiz.";
  const servis2 = lang === "ru" ? "Мы свяжемся с вами в ближайшее время" : "Siz bilan yaqin vaqt ichida bog'lanamiz.";
  const wrong1 = lang === "ru" ? "Ошибка" : "Xatolik";
  const wrong2 = lang === "ru" ? "Пожалуйста, заполните пробелы" : "Iltimos, bo'sh maydonlarni to'ldiring";

  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <label className="label">
          {ism}
          <input
            placeholder={placeholder1}
            type="text"
            name="full_name"
            value={newContact.full_name}
            onChange={handleInputChange}
          />
        </label>
        <label className="label">
          {telefon}
          <input
            placeholder={placeholder2}
            type="text"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
        </label>
        <button className="submit" type="submit">
          {send}
        </button>
      </form>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {isSuccess ? (
              <div className="succes">
                <div className="succestop">
                  <div>
                    <p className="servis1">{servis1}</p>
                    <p className="servis2">{servis2}</p>
                  </div>
                  <div><button className="suc-btn" onClick={closeModal}>X</button></div>
                </div>
                <img className="servis" src={servis} alt="rasm" />
              </div>
            ) : (
              <div className="succes">
                <div className="succestop">
                  <div>
                    <p className="wrong1">{wrong1}</p>
                    <p className="wrong2">{wrong2}</p>
                  </div>
                  <div><button className="suc-btn" onClick={closeModal}>X</button></div>
                </div>
                <img className="servis" src={servis} alt="rasm" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostContact;

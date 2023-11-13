import React from "react";
import Contacts from "./components/Contacts/Contacts";
import "./Contact.css";
function Contact() {
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>
 
      < Contacts lang={lang} />
 
    </div>
  );
}

export default Contact;

import React from 'react'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import CareerBack from './components/CareerBack/CareerBack';
import "./Karera.css";
import Vacation from './components/Vacation/Vacation';

function Karera() {
    const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>

        < CareerBack lang={lang} />
        < Vacation lang={lang} />

    </div>
  )
}

export default Karera
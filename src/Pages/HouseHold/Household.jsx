import React from 'react'
import Menu from '../../components/Menu/Menu'
import Main from '../Home/components/Main/Main';
import Gallery from '../Career/components/Gallery/Gallery';
import Footer from "../../components/Footer/Footer";
import HouseInfo from "./components/HouseInfo"
import HouseCategory from './components/HouseCategory/HouseCategory';
import HouseMain from './components/HouseMain';

function Engineering() {
    const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>
 
        < HouseInfo lang={lang} />
        < HouseCategory lang={lang} />
        <Main lang={lang} />
        < HouseMain lang={lang} />
        < Gallery lang={lang}  />
      <div className="transfoot">

      </div>
    </div>
  )
}

export default Engineering
import React from 'react'
import Menu from '../../components/Menu/Menu'
import EngInfo from './components/EngInfo/EngInfo';
import EngCategory from './components/EngCategory/EngCategory';
import Main from "../Home/components/Main/Main";
import EngMain from './components/EngMain/EngMain';
import Gallery from '../Career/components/Gallery/Gallery';
import Footer from "../../components/Footer/Footer";

function Engineering() {
    const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>

        < EngInfo lang={lang}/>
        < EngCategory lang={lang} />
        <Main lang={lang} />
        < EngMain lang={lang} />
        < Gallery lang={lang}  />
      <div className="transfoot">

      </div>
    </div>
  )
}

export default Engineering
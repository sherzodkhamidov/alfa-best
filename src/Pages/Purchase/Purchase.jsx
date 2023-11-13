import React from 'react'
import Menu from '../../components/Menu/Menu';
import Zakupki from './components/Zakupki/Zakupki';
import Gallery from '../Career/components/Gallery/Gallery';
import "./Purchase.css";
import Zakupki2 from './components/Zakupki2/Zakupki2';
import Footer from '../../components/Footer/Footer'

function Purchase() {
    const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>

            <Zakupki lang={lang} />
            < Gallery lang={lang} />
            <div className='pur-div'>
            <Zakupki2 lang={lang} />
            <Zakupki2 lang={lang} />
            </div>
     
    </div>
  )
}

export default Purchase
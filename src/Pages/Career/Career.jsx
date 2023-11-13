import React from 'react';
import History from '../Home/components/History/History';
import Main from '../Home/components/Main/Main';
import Profil from './components/Profil/Profil';
import "./Career.css";
import History2 from './components/History2/History2';
import Category from './components/Category/Category'
import Komanda from './components/Komanda/Komanda';
import Sponsor from './components/Sponsor/Sponsor';
import Gallery from './components/Gallery/Gallery';

function Career() {
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <div>

      <Profil lang={lang} />
      < History2 lang={lang} />
      < Category />
      < Komanda lang={lang} />
      <Main lang={lang} />
      < Sponsor />
      < Gallery lang={lang}  />
      <div className='topp'>
      <History lang={lang} />
      </div>
    </div>
  );
}

export default Career;

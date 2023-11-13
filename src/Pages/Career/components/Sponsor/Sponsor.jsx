import React from 'react'
import "./Sponcor.css";
import lukoil from "../../../../assets/lukoil.png"
import intel from "../../../../assets/intel.png"
import ikea from "../../../../assets/ikea.png"


function Sponsor() {
  return (
    <div className='sponsor'>
        <ul className='ul1'>
            <li><img src={lukoil} alt="rasm" /></li>
            <li><img src={intel} alt="rasm" /></li>
            <li><img src={ikea} alt="rasm" /></li>
            <li><img src={intel} alt="rasm" /></li>
            <li><img src={lukoil} alt="rasm" /></li>
        </ul>
    </div>
  )
}

export default Sponsor
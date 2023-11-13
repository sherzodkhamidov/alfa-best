import React from "react";
import "./CooperationCategory.css";
import smallLogo from "../../../../assets/smallLogo.png"
import PostContact from "../../../Contact/components/PostContact/PostContact";
import svyaz from "../../../../assets/svyaz.png"
function CooperationCategory() {
  const lang = localStorage.getItem("lang") || "ru";
  const title =
    lang === "ru"
      ? "Основные преимущества перехода на аутсорсинг"
      : "Autsorsingga o'tishning asosiy afzalliklari";

  const text1 =
    lang === "ru"
      ? "Сокращение издержек за счет оптимизации процессов"
      : "Jarayonni optimallashtirish orqali xarajatlarni kamaytirish";
  const text2 =
    lang === "ru"
      ? "Улучшение качества услуг за счет привлечения квалифицированного опытного подрядчика"
      : "Malakali, tajribali pudratchini jalb qilish orqali xizmatlar sifatini oshirish";
  const text3 =
    lang === "ru"
      ? "Адаптированные под ваши потребности меню и услуги"
      : "Sizning ehtiyojlaringizga moslashtirilgan menyu va xizmatlar";
  const text4 =
    lang === "ru"
      ? "Концентрация усилий управленческой команды на основной деятельности"
      : "Boshqaruv jamoasining sa'y-harakatlarini asosiy faoliyatga jamlash";

  return (
    <div className="catt-all">
      <div>
      <h1 className="catt-title">{title}</h1>
      <div className="bolim1">
        <div>
          <div className="bolim">
            <img src={smallLogo} alt="rasm" />
            <p>{text1}</p>
          </div>
          <div className="bolim">
            <img src={smallLogo} alt="rasm" />
            <p>{text2}</p>
          </div>
        </div>
        <div>
          <div className="bolim">
            <img src={smallLogo} alt="rasm" />
            <p>{text3}</p>
          </div>
          <div className="bolim">
            <img src={smallLogo} alt="rasm" />
            <p>{text4}</p>
          </div>
        </div>
      </div>
      </div>
      <div className="coo-div">
        <div>
< PostContact lang={lang} />
        </div>
        <div>
<img src={svyaz} alt="rasm" />
        </div>
      </div>
    </div>
  );
}

export default CooperationCategory;

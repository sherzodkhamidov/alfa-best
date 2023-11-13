import axios from "axios";
import React, { useState, useRef, useCallback, useLayoutEffect } from "react";
import "./Komanda.css";
import { useQuery } from 'react-query';

function Komanda({ lang }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const komandaRef = useRef(null);

  const { data, isLoading, isError, error } = useQuery(["team"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/team", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });


  useLayoutEffect(() => {
    if (komandaRef.current) {
      const containerWidth = komandaRef.current.clientWidth;
      const contentWidth = komandaRef.current.scrollWidth;
      const isContentLargerThanContainer = contentWidth > containerWidth;
      setIsScrollable(isContentLargerThanContainer);
    }
  }, [data]);
  

  const scroll = useCallback(
    (direction) => {
      const containerWidth = komandaRef.current.clientWidth;
      const contentWidth = komandaRef.current.scrollWidth;
      const scrollAmount = containerWidth / 2;
      const maxScrollPosition = contentWidth - containerWidth;
      let newPosition;
      if (direction === "left") {
        newPosition = Math.max(0, scrollPosition - scrollAmount);
      } else {
        newPosition = Math.min(maxScrollPosition, scrollPosition + scrollAmount);
      }
      setScrollPosition(newPosition);
    },
    [scrollPosition]
  );

  let komandtext = lang === "ru" ? "Наша команда" : "Bizning Jamoa";

  if (isError) return console.log("error:", error.message);
  if (isLoading) return ;

  return (
    <div className="vse">
      <div className="control">
        <p className="ourteam">{komandtext}</p>
        {isScrollable && (
          <div className="buttons">
            <div className="komanda-arrow" onClick={() => scroll("left")}>
              &lt;
            </div>
            <div className="komanda-arrow" onClick={() => scroll("right")}>
              &gt;
            </div>
          </div>
        )}
      </div>
      <div className="komanda-slider" ref={komandaRef}>
        <div
          className="komanda"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isScrollable ? "transform 0.5s ease" : "none",
          }}
        >
          {data?.datas?.map((itm) => {
            let name = itm.full_name;
            let photo = itm.photo;
            let position = lang === "ru" ? itm.position_ru : itm.position_uz;
            return (
              <div className="comand" key={itm.id}>
                <img className="immm"
                  src={`https://back.alfabestservis.uz/storage/${photo}`}
                  alt="rasm"
                />
                <p className="name">{name}</p>
                <p className="position">{position}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Komanda;

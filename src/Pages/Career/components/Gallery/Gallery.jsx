import axios from "axios";
import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Gallery.css";
import { useQuery } from 'react-query';

function Gallery({ lang }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const komandaRef = useRef(null);

  const { data, isLoading, isError, error } = useQuery(["photo_gallery"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/photo_gallery", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });

  useEffect(() => {
    const handleResize = () => {
      if (komandaRef.current) {
        const containerWidth = komandaRef.current.clientWidth;
        const contentWidth = komandaRef.current.scrollWidth;
        const isContentLargerThanContainer = contentWidth > containerWidth;
        setIsScrollable(isContentLargerThanContainer);
      }
    };

    // Attach the event listener for resizing
    window.addEventListener("resize", handleResize);

    // Call the handleResize function initially
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isScrollable, setIsScrollable] = useState(false);

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

  let fototext = lang === "ru" ? "Фотогалерея" : "Foto Galareya";

  if (isError) return console.log("error:", error.message);
  if (isLoading) return ;

  return (
    <div className="vse1">
      <div className="control1">
        <p className="ourteam1">{fototext}</p>
        {isScrollable && (
          <div className="buttons1">
            <div className="gallery-arrow" onClick={() => scroll("left")}>
              &lt;
            </div>
            <div className="gallery-arrow" onClick={() => scroll("right")}>
              &gt;
            </div>
          </div>
        )}
      </div>
      <div className="gallery-slider" ref={komandaRef}>
        <div
          className="gallery"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isScrollable ? "transform 0.5s ease" : "none",
          }}
        >
          {data?.datas?.map((itm) => {
            let photo = itm.image;
            return (
              <div className="comand" key={itm.id}>
                <img className="rasmcha"
                  src={`https://back.alfabestservis.uz/storage/${photo}`}
                  alt="rasm"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;


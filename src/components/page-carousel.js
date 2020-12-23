import React, { useState } from "react";

import { Link } from "gatsby";
import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import SVGIcon from "./feedback-top-svg";

export default function ImageCarousel(props) {
  const { items } = props;
  const sliderItems = items
  const [current, setCurrent] = useState(0);
  const length = sliderItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(sliderItems) || sliderItems.length <= 0) {
    return null;
  }

  return (
    <div
      className="position-relative slider overflow-hidden mx-auto"
      style={{
        maxWidth: "1440px",
      }}
    >
      {sliderItems.map((slide, idx) => {
        return (
          <div
            className={idx === current ? `slide active` : `slide`}
            key={`slide-${idx}`}
          >
            {idx === current && (
              <div className="h-100 is-overlay position-absolute d-flex" 
              style={{
                backgroundColor: `${slide.backgroundColor}`
              }}>
                <div
                  className="position-absolute px-5 w-100"
                  style={{
                    zIndex: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="mx-auto p-4 shadow rounded-lg" style={{
                    width: 'auto',
                    maxWidth: "640px",
                    backgroundColor: 'rgba(255, 255, 255, 75%)',
                    backdropFilter: {blur: '2px'}
                  }}>
                    <h1
                      className="display-4
                     mb-0 font-weight-bold font-alt
                     slider-heading text-center w-100"
                    >
                      {slide.text}
                    </h1>
  
                    {slide.description ? (
                      <p
                        className="text-center mx-auto mt-3"
                        style={{ maxWidth: "640px" }}
                      >
                        {slide.description}
                      </p>
                    ) : (
                      ""
                    )}
  
                    {slide.ctaText ? (
                      <p className="text-center mb-0">
                        <Link
                          to={slide.ctaUrl}
                          className="btn btn-primary btn-lg btn-rounded-lg "
                        >
                          {slide.ctaText}
                        </Link>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {!slide.useBgColorForSlide? <Img
                  className="w-100 h-100"
                  fluid={slide.image.fluid}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                /> : '' }
                
              </div>
            )}
          </div>
        );
      })}
      <div className="container position-absolute is-overlay">
        <button
          onClick={prevSlide}
          className="btn btn-sm btn-outline-light position-absolute slider-arrow slider-arrow--left px-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-sm btn-outline-light position-absolute slider-arrow slider-arrow--right px-2"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div
        className="position-absolute text-white w-100"
        style={{
          bottom: "0px",
        }}
      >
        <SVGIcon />
      </div>
    </div>
  );
}

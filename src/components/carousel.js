import React, { useState } from "react";

import { Link, StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

import { sliderItems } from "./slider-items";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ImageCarousel(props) {
  const {lang} = props
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

    <StaticQuery 
      query={graphql`
        query SliderQuery {
          allContentfulHomeSlider {
            nodes {
              node_locale
              slide {
                image {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                text
                node_locale
              }
            }
          }
        }

      `}
    
    
      render={data => {
        
        const sliderItems = data.allContentfulHomeSlider.nodes
          .filter(i => i.node_locale === lang)[0].slide
        return (
          <div className="position-relative slider overflow-hidden mx-auto" 
            style={{
              maxWidth: "1440px"
            }}
          >
            {sliderItems.map((slide, idx) => {
              return (
                <div
                  className={idx === current ? `slide active` : `slide`}
                  key={`slide-${idx}`}
                >
                  { idx === current && <div>
                    <h1 
                      className="display-4 text-white mb-3 font-weight-bold font-alt
                      position-absolute slider-heading text-center w-100"
                      >{slide.text}</h1>
                    <Img
                      className="w-100"
                      fluid={slide.image.fluid}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    
                  </div>
                  }
                </div>
              );
            })}
            <div className="container position-absolute is-overlay">
              <button
                onClick={prevSlide}
                className="btn btn-lg btn-primary position-absolute slider-arrow slider-arrow--left px-3"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-lg btn-primary position-absolute slider-arrow slider-arrow--right px-3"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        )
      }}
    />
  );
}
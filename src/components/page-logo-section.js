import React from 'react'

import Img from "gatsby-image";

import SVGTop from './partners-top-svg'
import SVGBottom from './partners-bottom-svg'

export default function (props) {

  const {items} = props

  const heading = items.heading
  const subheading = items.subheadings
  const images = items.images
  return (
    <>
    {/* <section className="text-primarylight">
      <SVGTop/>
    </section> */}
    <section className="py-7 bg-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h2 className="font-alt font-weight-bold">
              {heading}
            </h2>
           { subheading ? <p className="lead">
              {subheading}
            </p> : ''}
          </div>
        </div>
        
        <div className="row mt-4 justify-content-center">
          <div className="col-auto">
            <div className="row flex-wrap justify-content-center align-content-center">
          
              {images.map((i,idx) => {
                return (
                  <div className="col-auto mb-4 d-flex flex-column justify-content-center"
                    key={`logo-item-${idx}`}
                  >
                    <Img fixed={i.fixed} />

                  </div>
                )
              })}
        
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section className="text-primarylight">
      <SVGBottom/>
    </section> */}
    </>
  )
}
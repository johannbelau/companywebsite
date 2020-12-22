import React from 'react'
import HeroSVG from './hero-bottom-svg'

import { Link } from 'gatsby'

export default function (props) {

  const { items } = props;

  

  return (
    <>
    
    <section className=" overflow-hidden pt-4 pt-lg-7 white bg-primarylight">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center align-self-center">
            
            <h1 className="h1 text-primary mb-3 mt-5 mt-lg-0 font-weight-bold font-alt">
              {items.heading}
            </h1>
            <p className="lead">
              {items.subheading}
            </p>
            {items.ctaText?
            <p className="">
              <Link to={items.ctaUrl} className="btn btn-outline-primary btn-lg">{items.ctaText}</Link>
            </p> : ''}
            
          </div>
        </div>
      </div>
    </section>

    <section className="text-primarylight">
      <HeroSVG />
    </section>
    </>
  )
}
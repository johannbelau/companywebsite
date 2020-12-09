import React from 'react'
import HeroSVG from './hero-bottom-svg'

export default function () {
  return (
    <>
    
    <section className=" overflow-hidden pt-4 pt-lg-7 white bg-primarylight">
      <div className="container">
        <div className="row d-flex justify-content-center py-6">
          <div className="col-lg-6 text-center align-self-center">
            
            <h1 className="display-4 text-primary mb-3 mt-5 mt-lg-0 font-weight-bold font-alt">
              Lorem ipsum
            </h1>
            <p className="lead">
              Lorem Ipsum
            </p>
            <p className="">
              <a href="{{ site.data.[page.lang].hero-banner.btn_link }}" className="btn btn-outline-primary btn-lg">Lorem Ipsum</a>
            </p>
            
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
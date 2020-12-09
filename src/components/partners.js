import React from 'react'

import SVGTop from './partners-top-svg'
import SVGBottom from './partners-bottom-svg'

export default function () {
  return (
    <>
    <section className="text-primarylight">
      <SVGTop/>
    </section>

    <section className="py-7 bg-primarylight">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h2 className="font-alt font-weight-bold">
              Lorem ipsum dolor sit
            </h2>
            <p className="lead">
              Dolor sit, amet consectetur adipisicing elit. Sit beatae optio iste repellat aut sapiente.
            </p>
          </div>
        </div>
        
        <div className="row mt-4 justify-content-center">
          <div className="col-auto">
            <div className="row flex-wrap justify-content-center align-content-center">
          
              
              <div className="col-auto mb-4">
                <img src="https://via.placeholder.com/150x100/0047BB" width="150" height="100" alt=""/>
              </div>
              
              <div className="col-auto mb-4">
                <img src="https://via.placeholder.com/150x100/0047BB" width="150" height="100" alt=""/>
              </div>
              
              <div className="col-auto mb-4">
                <img src="https://via.placeholder.com/150x100/0047BB" width="150" height="100" alt=""/>
              </div>
              
              <div className="col-auto mb-4">
                <img src="https://via.placeholder.com/150x100/0047BB" width="150" height="100" alt=""/>
              </div>
              
              <div className="col-auto mb-4">
                <img src="https://via.placeholder.com/150x100/0047BB" width="150" height="100" alt=""/>
              </div>
              
        
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-primarylight">
      <SVGBottom/>
    </section>
    </>
  )
}
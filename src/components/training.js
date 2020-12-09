import React from 'react'

import SVGTop from './training-top-svg'
import SVGBottom from './training-bottom-svg'

export default function () {
  return (
    <>
      <section className="text-light">
        <SVGTop/>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-4">
              <div className="bg-primary shadow-lg rounded-lg d-flex h-100 p-4">
                <h2 className="text-white display-4 align-self-center font-alt">
                  Lorem ipsum dolor sit
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="p-4">
                <div className="badge badge-primary text-uppercase px-2 py-1" >
                  Lorem ipsum dolor sit amet consectetur
                </div>
                <h3 className="mt-4 font-weight-bold font-alt">Lorem, ipsum dolor</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus in fuga perferendis blanditiis nobis quo ex quaerat.</p>
                <h3 className="mt-4 font-weight-bold font-alt">Perspiciatis dignissimos soluta eveniet</h3>
                <p>
                  In atque perspiciatis dignissimos soluta eveniet, laboriosam voluptas deleniti, asperiores sint suscipit quo? Enim, asperiores ex. Nesciunt sequi hic exercitationem ut aut, nulla magnam, fugiat dolorem, aspernatur fugit iure eaque! Expedita quia iure accusantium magni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-light">
        <SVGBottom/>
      </section>
    </>
  )
}
import React from "react";

import SVGTop from "./feedback-top-svg";
import SVGBottom from "./feedback-bottom-svg";

export default function () {
  return (
    <>
      <section className="text-primary">
        <SVGTop />
      </section>

      <section
        className="pt-7 pt-lg-0 bg-primary bg-nr bg-contain bg-p-b"
        style={{backgroundImage: 'url(img/4rivers-bg-lines.svg)'}}
      >
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col-lg-12 text-white">
              <h2 className="font-alt font-weight-bold">
                Feedback ipsum dolor sit
              </h2>
              <p className="lead">
                Dolor sit, amet consectetur adipisicing elit. Sit beatae optio
                iste repellat aut sapiente.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-7">
              <div className="card-columns">
                {[1,2,3,4,5,6,7,8,9,10,11].map(i => {
                  return (
                    <div className="card shadow-sm p-3 mb-4" key={`feedback-item-${i}`}>
                      <blockquote className="blockquote mb-0 card-body">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                          Nobis a dolorum, voluptatibus ratione neque quos
                          perferendis adipisci incidunt repellendus eveniet!
                        </p>

                        <footer className="blockquote-footer">
                          <small className="text-muted">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-primary ">
        <SVGBottom />
      </section>
    </>
  );
}

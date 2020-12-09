import React from "react";

export default function () {
  return (
    <section className="pb-7 pt-7 pt-lg-0 bg-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h2 className="font-alt font-weight-bold">
              Projects ipsum dolor sit
            </h2>
            <p className="lead">
              Dolor sit, amet consectetur adipisicing elit. Sit beatae optio
              iste repellat aut sapiente.
            </p>
          </div>
        </div>

        <div className="row flex-wrap justify-content-around align-content-center mt-4">
          <div className="col-auto col-lg-3 text-center">
            <p className="lead">Lorem, ipsum.</p>
            <div
              className="embed-responsive embed-responsive-1by1 mx-auto"
              style={{width: '12rem'}}
            >
              <div className="embed-responsive-item rounded-circle bg-primary">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <p className="display-4 text-white font-weight-bold">
                    1
                  </p>
                </div>
              </div>
            </div>
            <p className="lead text-uppercase font-weight-bold mt-3">
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

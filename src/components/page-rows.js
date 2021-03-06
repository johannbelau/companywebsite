import React from "react";
import Img from "gatsby-image";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default (props) => {
  const { items } = props;
  const rows = items
  // const filtered = rows.filter((i) => i.node_locale === lang);

  return (
    <section className="">
      <div className="container">
        {rows.map((i, idx) => {
          if (idx % 2 === 0) {
            return (
              <div className="row d-flex my-7" key={`row-${idx}`}>
                <div className="col-lg-6 d-flex order-lg-2">
                  <Img
                    className="img-fluid mx-auto d-block align-self-center"
                    fixed={i.image.fixed}
                    alt={i.heading}
                  />
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="p-4">
                    <h3 className="mt-4 font-weight-bold font-alt">
                      {i.heading}
                    </h3>
                    <div>{documentToReactComponents(i.bodyText.json)}</div>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className="row d-flex my-7" key={`row-${idx}`}>
              <div className="col-lg-6 d-flex">
                <Img
                  className="img-fluid mx-auto d-block align-self-center"
                  fixed={i.image.fixed}
                  alt={i.heading}
                />
              </div>
              <div className="col-lg-6">
                <div className="p-4">
                  <h3 className="mt-4 font-weight-bold font-alt">
                    {i.heading}
                  </h3>
                  <div>{documentToReactComponents(i.bodyText.json)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

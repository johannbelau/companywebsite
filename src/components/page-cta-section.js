import React from "react";

import { StaticQuery, graphql } from "gatsby";

export default function (props) {
  const { lang, items } = props;

  const contact = items;

  
  return (
    <section>
      <div className="container">
        <div className="row no-gutters justify-content-center mb-4 ">
          <div className="col-lg-8 shadow-lg rounded-lg text-center mt-7 bg-white overflow-hidden">
            <div className="py-6 px-4">
              <h3 className="font-alt font-weight-bold mb-3">
                {contact.heading}
              </h3>
              <p className="lead mb-4">{contact.subheading}</p>
              <a href={contact.ctaUrl} className="btn btn-primary btn-lg">
                {contact.ctaText}
              </a>
            </div>
            <div className="w-100 bg-primary" style={{ height: "6px" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

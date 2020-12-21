import React from "react";
import { Link } from "gatsby";

export default function (props) {
  const { items } = props;
  const features = items;

  // const filtered = features.filter((i) => i.node_locale === lang);
  return (
    <section className="pt-md-5 pb-md-0 py-0">
      <div className="container">
        <div className="row">
          {features.map((i, idx) => {
            return (
              <div
                className="col-lg-3 col-sm-6 mt-5 mt-lg-0"
                key={`feature-${idx}`}
              >
                <div className="card border-0">
                  <div className="card-body text-center">
                    <div
                      className="d-flex mb-3 flex-col mx-auto"
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    >
                      <img
                        src={i.image.file.url}
                        className="w-100 align-self-center"
                        alt={i.title}
                      />
                    </div>
                    <p className="h5 font-weight-bold font-alt mb-3">
                      {i.title}
                    </p>

                    {typeof i.ctaUrl === "string" ? (
                      <p className="mb-0">
                        <Link
                          to={`${i.ctaUrl}`}
                          className="btn btn-primary btn-rounded-lg "
                        >
                          {i.ctaText}
                        </Link>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

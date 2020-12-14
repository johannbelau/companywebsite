import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default (props) => {

  const {lang} = props
  return (
    <StaticQuery
      query={graphql`
        query PageRowSectionQuery {
          allContentfulPageRowSection {
            edges {
              node {
                node_locale
                bodyText {
                  json
                }
                heading
                image {
                  fixed {
                    ...GatsbyContentfulFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const rows = data.allContentfulPageRowSection.edges;
        const filtered = rows.filter(i => i.node.node_locale === lang)

        return (
          <section className="">
            <div className="container">
                {filtered.map((i, idx) => {
                  if (idx % 2 === 0) {
                    return (
                      
                      <div className="row d-flex my-7" key={`row-${idx}`}>
                      <div className="col-lg-6 d-flex order-lg-2">
                        <Img 
                          className="img-fluid mx-auto d-block align-self-center"
                          fixed={i.node.image.fixed}
                          alt={i.node.heading} />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                          <div className="p-4">
                            <h3 className="mt-4 font-weight-bold font-alt">{i.node.heading}</h3>
                            <div>
                              {documentToReactComponents(i.node.bodyText.json)}
                            </div>
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
                          fixed={i.node.image.fixed}
                          alt={i.node.heading} />
                        </div>
                        <div className="col-lg-6">
                          <div className="p-4">
                            <h3 className="mt-4 font-weight-bold font-alt">{i.node.heading}</h3>
                            <div>
                              {documentToReactComponents(i.node.bodyText.json)}
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })}
              
            </div>
          </section>
        );
      }}
    />
  );
};

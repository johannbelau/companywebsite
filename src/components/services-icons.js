import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function () {
  return (

    <StaticQuery 
    
      query={graphql`
        query FeaturesQuery {
          allContentfulFeature(filter: {parent: {}, node_locale: {eq: "en"}}, sort: {order: ASC, fields: createdAt}) {
            edges {
              node {
                ctaText
                createdAt
                image {
                  file {
                    url
                  }
                }
                title
              }
            }
          }
        }

      `}

      render={data => {
        const features = data.allContentfulFeature.edges
        return (
          (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  { features.map((i,idx) => {
                    return (
                      <div className="col-lg-4 col-md-4 col-sm-6 mt-5 mt-lg-0" key={`feature-${idx}`}>
                        <div className="card border-0">
                          <div className="card-body text-center">
                            <img src={i.node.image.file.url} 
                              className="w-50 mx-auto mb-3" 
                              style={{maxWidth: '120px'}}
                              alt={i.node.title} />
                            <p className="h5 font-weight-bold font-alt mb-3">{i.node.title}</p>
                            {/* <p className="lead">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </p> */}
                            <p>
                              <a href="" className="btn btn-primary btn-rounded-lg ">{i.node.ctaText}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        )
      }}
    />

    
  )
}
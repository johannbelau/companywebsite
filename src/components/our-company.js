import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SVGTop from './training-top-svg'
import SVGBottom from './training-bottom-svg'

export default function () {
  return (

    <StaticQuery 
      query={graphql`
        query ServicesQuery {
          allContentfulService(filter: {parent: {}, node_locale: {eq: "en"}}, sort: {order: ASC, fields: createdAt}) {
            edges {
              node {
                heading
                description {
                  description
                }
              }
            }
          }
        }
      `}
    

    render={data => {
      const services = data.allContentfulService.edges

      return (
        <>
      <section className="text-light">
        <SVGTop/>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-3">
              <div className="bg-primary shadow-lg rounded-lg d-flex h-100 p-4">
                <h2 className="text-white display-4 align-self-center font-alt">
                  Our Company
                </h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="p-4">
                <div className="row">
                  { services.map((i,idx) => {
                    return (
                      <div className="col-lg-6" key={`service-${idx}`}>
                        <h3 className="mt-4 font-weight-bold font-alt">{i.node.heading}</h3>
                        <p>
                          {i.node.description.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
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
    }}

    />
  )
}
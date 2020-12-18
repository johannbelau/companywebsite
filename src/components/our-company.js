import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SVGTop from './training-top-svg'
import SVGBottom from './training-bottom-svg'

export default function (props) {
  const {lang} = props
  return (

    <StaticQuery 
      query={graphql`
        query ServicesQuery {
          allContentfulService(sort: {order: ASC, fields: createdAt}) {
            edges {
              node {
                heading
                node_locale
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

      const filtered = services.filter(i => i.node.node_locale === lang)

      return (
        <>
      <section className="text-light">
        <SVGTop/>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row pt-5">
            <div className="col-xl-3 col-lg-4 col-md-auto">
              <div className="bg-primary shadow-lg rounded-lg d-flex h-100 p-4">
                <h2 className="text-white h1 font-weight-normal align-self-center font-alt">
                  {(lang === 'de') ? 'Unser Unternehmen' : 'Our Company'}
                </h2>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="p-4">
                <div className="row">
                  { filtered.map((i,idx) => {
                    return (
                      <div className="col-lg-6 col-md-6" key={`service-${idx}`}>
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
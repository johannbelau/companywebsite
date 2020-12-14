import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

export default function (props) {
  const {lang} = props
  return (

    <StaticQuery 
      query={graphql`
          query ContactUs {
            allContentfulCenteredCtaSection {
              edges {
                node {
                  ctaText
                  ctaUrl
                  heading
                  subheading
                  node_locale
                }
              }
            }
          }
        `}

      render={ data => {
        const contact = data.allContentfulCenteredCtaSection.edges;
        
        const filtered = contact.filter(i => i.node.node_locale === lang)[0].node
        return (
          <section className="">
            {/* {JSON.stringify(contact)} */}
            <div className="container">
              <div className="row no-gutters justify-content-center mb-4 ">
                <div className="col-lg-8 shadow-lg rounded-lg text-center mt-7 bg-white overflow-hidden">
                  <div className="py-6 px-4">
                    <h3 className="font-alt font-weight-bold mb-3">
                    {filtered.heading}
                    </h3>
                    <p className="lead mb-4">{filtered.subheading}</p>
                    <a href={filtered.ctaUrl} className="btn btn-primary btn-lg">{filtered.ctaText}</a>
                  </div>
                  <div className="w-100 bg-primary" style={{height: '6px'}}></div>
                </div>
              </div>
            </div>
          </section>
        )
      }}
    />
    
   
  )
}
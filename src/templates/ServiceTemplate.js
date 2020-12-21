import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

import Img from "gatsby-image";

import Navigation from '../components/navigation-int'
import Footer from '../components/Footer'

import Hero from '../components/hero'

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function ({data}) {

  const lang = data.contentfulServicePage.node_locale
  const page = data.contentfulServicePage
  const pageHero = data.contentfulServicePage.pageHeroSection
  const pageRows = data.contentfulServicePage.pageRowSections

  return (
    <Layout>
      <Helmet>
        <title>{page.pageMetaTitle}</title>
        <meta name="description" content={page.pageMetaDescription} />
      </Helmet>

      {/* <Navigation lang={page.node_locale} /> */}
      <Navigation lang={lang} />

      <Hero
        heading={pageHero.heading}
        subheading={pageHero.subheading}
        // ctaText="Click"
        // ctaUrl="/"
      />


          <section className="">
            <div className="container">
                {pageRows.map((i, idx) => {
                  if (idx % 2 === 0) {
                    return (
                      
                      <div className="row d-flex my-7" key={`row-${idx}`}>
                      <div className="col-lg-6 d-flex order-lg-2">
                        <Img 
                          className="img-fluid mx-auto d-block align-self-center"
                          fixed={i.image.fixed}
                          alt={i.heading} />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                          <div className="p-4">
                            <h3 className="mt-4 font-weight-bold font-alt">{i.heading}</h3>
                            <div>
                              {documentToReactComponents(i.bodyText.json)}
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
                          fixed={i.image.fixed}
                          alt={i.heading} />
                        </div>
                        <div className="col-lg-6">
                          <div className="p-4">
                            <h3 className="mt-4 font-weight-bold font-alt">{i.heading}</h3>
                            <div>
                              {documentToReactComponents(i.bodyText.json)}
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })}
            </div>
          </section>
        
    
      {/* <Footer lang={page.node_locale} /> */}
      <Footer lang={lang} />
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!, $lang: String!) {
    contentfulServicePage(slug: { eq: $slug },node_locale: {eq: $lang}) {
      node_locale
      pageMetaDescription
      pageMetaTitle
      slug
      pageRowSections {
        bodyText {
          json
        }
        heading
        image {
          fixed {
            ...GatsbyContentfulFixed
          }
          title
        }
      }
      pageHeroSection {
        heading
        subheading
      }
    }
  }
`
import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

import Img from "gatsby-image";

import Navigation from '../components/navigation-int'
import Footer from '../components/Footer'

import Hero from '../components/page-hero'
import PageCarousel from '../components/page-carousel'
import Features from '../components/page-features'
import OurCompany from '../components/page-company'
import PageRows from '../components/page-rows'
import CTA from '../components/page-cta-section'

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function ({data}) {

  const lang = data.contentfulLandingPage.node_locale
  const page = data.contentfulLandingPage

  const {
    pageMetaTitle,
    pageMetaDescription,
    pageSlider,
    pageHero,
    pageFeatureSection,
    pageCompanySection,
    pageRows,
    pageCtaSection,
    node_locale
  } = page


  return (
    <Layout>
      <Helmet>
        <title>{pageMetaTitle}</title>
        <meta name="description" content={pageMetaDescription} />
      </Helmet>

      <Navigation lang={lang} />
      {JSON.stringify(lang)}
      { pageHero ?<Hero items={pageHero} lang={lang}/> :  <PageCarousel items={pageSlider} lang={lang}/>}
      
      { pageFeatureSection ? <Features  items={pageFeatureSection} lang={lang}/> : ''}
      
      { pageCompanySection ? <OurCompany items={pageCompanySection} lang={lang}/> : ''}

      { pageRows ? <PageRows items={pageRows} lang={lang}/> : ''}

      { pageCtaSection ? <CTA items={pageCtaSection} lang={lang}/> : ''}

      <Footer lang={lang} />
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    contentfulLandingPage(slug: { eq: $slug }) {
      node_locale
      slug
      pageMetaTitle
      pageMetaDescription
      pageSlider {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        text
        description
        ctaText
        ctaUrl
      }
      pageRows {
        heading
        bodyText {
          json
        }
        image {
          fixed {
            ...GatsbyContentfulFixed
          }
        }
      }
      pageFeatureSection {
        ctaText
        ctaUrl
        title
        image {
          file {
            url
          }
          title
        }
      }
      pageCompanySection {
        subheading
        heading
        sections {
          heading
          description {
            description
          }
        }
      }
      pageCtaSection {
        heading
        ctaUrl
        ctaText
        subheading
      }
    }
  }
`
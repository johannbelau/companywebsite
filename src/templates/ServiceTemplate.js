import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

// import Img from "gatsby-image";

import Navigation from '../components/navigation-int'
import Footer from '../components/Footer'

import HeroSmall from '../components/page-hero-sm'
import LogoSection from '../components/page-logo-section'
import PageRows from '../components/page-rows'
import CTA from '../components/page-cta-section'


// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function ({data}) {

  const lang = data.contentfulServicePage.node_locale
  const page = data.contentfulServicePage
  const {
    pageMetaTitle,
    pageMetaDescription,
    pageHeroSection,
    pageLogoSection,
    pageRowSections,
    pageCtaSection
  } = page

  return (
    <Layout>
      <Helmet>
        <title>{pageMetaTitle}</title>
        <meta name="description" content={pageMetaDescription} />
      </Helmet>

      <Navigation lang={lang} />


      { pageHeroSection ?<HeroSmall items={pageHeroSection} lang={lang}/> :  ''}

      { pageLogoSection ? <LogoSection items={pageLogoSection[0]} lang={lang}/> : ''}

      { pageRowSections ? <PageRows items={pageRowSections} lang={lang}/> : ''}

      { pageCtaSection ? <CTA items={pageCtaSection} lang={lang}/> : ''}
  
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
      pageHeroSection {
        heading
        subheading
      }
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
      pageCtaSection {
        ctaText
        ctaUrl
        heading
        subheading
      }
      pageLogoSection {
        heading
        images {
          fixed(width: 220) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
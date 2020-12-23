import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

import Navigation from '../components/navigation-int'
import Footer from '../components/Footer'

import Hero from '../components/page-hero'
import PageCarousel from '../components/page-carousel'
import Features from '../components/page-features'
import OurCompany from '../components/page-company'
import PageRows from '../components/page-rows'
import CTA from '../components/page-cta-section'

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
    pageCtaSection
  } = page


  return (
    <Layout>
      <Helmet>
        <title>{pageMetaTitle}</title>
        <meta name="description" content={pageMetaDescription} />
        <meta property="og:title" content={pageMetaTitle}/>
        <meta property="og:description" content={pageMetaDescription}/>
        <meta property="og:image" content="/img/logo/4rivers_logo_circle@3x.png"/>
      </Helmet>

      <Navigation lang={lang} />

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
  query($slug: String!, $lang: String!) {
    contentfulLandingPage(slug: { eq: $slug },node_locale: {eq: $lang}) {
      node_locale
      slug
      pageMetaTitle
      pageMetaDescription
      pageSlider {
        backgroundColor
        useBgColorForSlide
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
          fixed(width: 320) {
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
import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

import Navigation from '../components/navigation-int'
import Footer from '../components/Footer'

import Hero from '../components/page-hero-sm'
import PageCarousel from '../components/page-carousel'
import LogoSection from '../components/page-logo-section'
import OurCompany from '../components/page-company'
import PageRows from '../components/page-rows'
import CTA from '../components/page-cta-section'

export default function ({data}) {

  const lang = data.contentfulSmallPage.node_locale
  const page = data.contentfulSmallPage

  const {
    pageMetaTitle,
    pageMetaDescription,
    pageSlider,
    pageHero,
    pageLogoSection,
    pageCompanySection,
    pageRows,
    pageCtaSection
  } = page


  return (
    <Layout>
      <Helmet>
        <title>{pageMetaTitle}</title>
        <meta name="description" content={pageMetaDescription} />
      </Helmet>

      <Navigation lang={lang} />

      { pageHero ?<Hero items={pageHero} lang={lang}/> :  <PageCarousel items={pageSlider} lang={lang}/>}
      
      { pageRows ? <PageRows items={pageRows} lang={lang}/> : ''}
      
      { pageLogoSection ? <LogoSection  items={pageLogoSection} lang={lang}/> : ''}
      
      { pageCompanySection ? <OurCompany items={pageCompanySection} lang={lang}/> : ''}

      { pageCtaSection ? <CTA items={pageCtaSection} lang={lang}/> : ''}

      <Footer lang={lang} />
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!, $lang: String!) {
    contentfulSmallPage(slug: { eq: $slug },node_locale: {eq: $lang}) {
        node_locale
        pageMetaDescription
        pageMetaTitle
        slug
        pageCtaSection {
          heading
          subheading
          ctaUrl
          ctaText
        }
        pageHero {
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
        pageRows {
          bodyText {
            json
          }
          image {
            fixed {
              ...GatsbyContentfulFixed
            }
          }
        }
        
      }
    }
`
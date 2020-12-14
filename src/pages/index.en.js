import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation-int'
import Footer from '../components/Footer'

import Layout from '../components/layout'
import HomeHero from '../components/hero'
import Services from '../components/services-icons'
import OurCompany from '../components/our-company'
import Contact from '../components/contact-us'
import LeftRight from '../components/image-heading-text-cta'


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')

    return (
      <Layout location={this.props.location}>

      <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
          <Navigation lang="en"/>
          <HomeHero/>
          <Services lang="en"/>
          <OurCompany lang="en"/>
          <LeftRight lang="en"/>
          <Contact lang="en"/>
          <Footer lang="en"/>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query ENHomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

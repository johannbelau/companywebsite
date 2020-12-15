import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation-int'
import Footer from '../components/Footer'

import Carousel from '../components/carousel'

import Layout from '../components/layout'
// import HomeHero from '../components/hero'
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
        <Navigation lang="de"/>

        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
          <Carousel lang="de"/>
          {/* <HomeHero/> */}
          <Services lang="de"/>
          <OurCompany lang="de"/>
          <LeftRight lang="de"/>
          <Contact lang="de"/>
          <Footer lang="de"/>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

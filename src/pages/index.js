import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import HomeHero from '../components/hero'
import Services from '../components/services'
import Training from '../components/training'
import Events from '../components/events'
import Partners from '../components/partners'
import Projects from '../components/projects'
import Feedback from '../components/feedback'
import Contact from '../components/contact'
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
          
          <HomeHero></HomeHero>
          <Services></Services>
          <LeftRight/>
          <Training/>
          <Events/>
          <Partners/>
          <Projects/>
          <Feedback/>
          <Contact/>
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

import React from 'react'

import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Navigation from '../components/navigation-int'
import Footer from '../components/Footer'


export default function({data}) {
  const page = data.contentfulWebPageWithText

  const Heading2 = ({ children }) => <h2 className="font-alt h3 mt-4 mb-3">{children}</h2>;

  const Bold = ({ children }) => <span className="font-weight-bold">{children}</span>
  
  const UL = ({ children }) => <ul className="">{children}</ul>


  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node,children) => <Heading2>{children}</Heading2>,
      [BLOCKS.UL_LIST]: (node, children) => <UL>{children}</UL>,
    },
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{page.pageMetaTitle}</title>
        <meta name="description" content={page.pageMetaDescription} />
      </Helmet>

      <Navigation lang={page.node_locale} />

      <section className="pt-6">
        <div className="container">
          <div className="col-lg-12">
            <h1 className=" mb-4 font-weight-bold font-alt">{page.heading}</h1>
            <p className="font-alt">{page.subheading}</p>
            <div>
              {documentToReactComponents(page.bodyText.json, options)}
            </div>
          </div>
        </div>
      </section>
      <Footer lang={page.node_locale} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $lang: String!) {
    contentfulWebPageWithText(slug: { eq: $slug },node_locale: {eq: $lang}) {
      heading
      bodyText {
        json
      }
      slug
      subheading
      pageMetaTitle
      pageMetaDescription
      node_locale
    }
  }
`
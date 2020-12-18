import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function (props) {
  return (
    <StaticQuery 
      query={graphql`
        query AllSocialItems {
          allContentfulSocialItem(filter: {node_locale: {eq: "en"}}) {
            edges {
              node {
                name
                url
                node_locale
              }
            }
          }
        }

      `}
    

      render={ data => {
        const socialItems = data.allContentfulSocialItem.edges

        return (
          <>
            {socialItems.map((i,idx) => {
              if (i.node.name === 'xing') {
                return (
                  <a href={i.node.url} className="social-link">
                    <FontAwesomeIcon
                      icon={faXing}
                      size="lg"
                      className="text-primary mx-1"
                    />
                  </a>
                )
              }
              return (
                <a href={i.node.url} className="social-link">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    className="text-primary mx-1"
                  />
                </a>
              )
            })}
          </>
        )
      }}
    />
  )
}
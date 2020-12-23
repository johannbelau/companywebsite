import React from 'react'

import { Link, StaticQuery, graphql } from 'gatsby'

import { useLocation } from "@reach/router"

function getPageSlug (lang) {
  if (lang === 'en') {
    return '/'
  }
  return '/de/'
}

export default function (props) {
  const location = useLocation()
  const {lang} = props



  return (
    <StaticQuery 
      query={graphql`
        query NavItems {
          allContentfulGlobalNavigation {
            edges {
              node {
                node_locale
                navigationItem {
                  name
                  url
                  node_locale
                }
              }
            }
          }
        }
      `}

      render={ data => {

        const navbarEntries = data.allContentfulGlobalNavigation.edges
        const filteredEnties = navbarEntries.filter(i => i.node.node_locale === lang)[0].node.navigationItem

        return (
          <>
            {filteredEnties.map((i, idx) => {
              return (
                <li className="nav-item" key={`nav-item-${idx}`}>
                  <Link 
                    to={`${getPageSlug(lang)}${i.url === '/' ? '' : i.url}`}
                    className="px-2 py-1 nav-link text-primary font-weight-bold"
                  >
                    {i.name}
                  </Link>
                </li>
              )
            })}
            
          </>
        )
      }}
    />
  )
}
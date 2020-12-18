import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export default function (props) {
  const { lang } = props;
  return (
    <StaticQuery 
      query={graphql`
        query FooterColumns {
          allContentfulFooter {
            edges {
              node {
                node_locale
                footerRow {
                  heading
                  node_locale
                  bodyText {
                    json
                  }
                }
                
              }
            }
          }
        }
      `}
    

      render={ data => {
        const allColumns = data.allContentfulFooter.edges.filter(i => i.node.node_locale === lang)[0].node.footerRow
        // const currentRows = socialItems
        const Heading2 = ({ children }) => <h2 className="font-alt h3 mt-4 mb-3">{children}</h2>;
        const Bold = ({ children }) => <span className="bold">{children}</span>
        const Text = ({ children }) => <p className="mb-0">{children}</p>
        const UL = ({ children }) => <ul className="list-unstyled">{children}</ul>
      
      
        const options = {
          renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
          },
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.UL_LIST]: (node, children) => <UL>{children}</UL>,
          },
          
        };

        return (
          <>
            {allColumns.map((i, idx) => {
              return (
                <div 
                  className={idx === 0 ? "col-md-4" : "col-md-3 offset-md-1"} 
                  key={`footer-col-${idx}`}>
                  <p className="font-weight-bold h5">
                    {i.heading}
                  </p>
                  <div>
                  {documentToReactComponents(i.bodyText.json, options)}
                  </div>
                </div>
              )
            })}
          </>
        )
      }}
    />
  )
}
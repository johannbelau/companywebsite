import React from 'react';

import { StaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <StaticQuery 
      query={graphql`
        query PhoneAndEmail {
          allContentfulCompanyInfoItem(filter: {node_locale: {eq: "en"}}) {
            nodes {
              name
              value
            }
          }
        }
      `}
    

      render={data => {
        const email = data.allContentfulCompanyInfoItem.nodes.filter(i => i.name === 'Company Email')[0]
        const phone = data.allContentfulCompanyInfoItem.nodes.filter(i => i.name === 'Company Phone')[0]

        const phoneProcessed = (phone.value).match(/\d+/g).join('');
        return (
          <>
           
            <div className="col-auto">
              <a
                href={`mailto:${email.value}`}
                className="small mr-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary mx-1"
                />
                {email.value}
              </a>
            </div>
            <div className="col-auto">
              <a 
                href={`tel:${phoneProcessed}`}
                className="small mr-2">
                <FontAwesomeIcon icon={faPhone} className="text-primary mx-1" />
                {phone.value}
              </a>
            </div>
          </>
        )
      }}
    />
  )
}
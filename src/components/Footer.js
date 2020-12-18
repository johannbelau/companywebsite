import React from 'react'
import FooterSocial from './footer-social';
import FooterColumns from './footer-columns';

export default (props) => {
  const { lang } = props;
  return (
    <footer>
      <div className="pt-8 pb-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-auto">
              <img src="/img/4Rivers_Logo.svg" alt="4 Rivers GmbH Logo" width="128" height="48"/>
            </div>
          </div>
        
          <div className="row">
            <FooterColumns lang={lang}/>
          </div>
          <hr className="mt-4 border-primary mb-4"/>
          <div className="row justify-content-between">
              <div className="col-lg-4">
                <span className="text-muted small ml-2">©{new Date().getFullYear()} 4 Rivers GmbH</span>
              </div>
              <div className="col-lg-2 d-flex justify-content-lg-end justify-content-start col-6 mt-3 mt-md-0">
                
                <FooterSocial />
                
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}
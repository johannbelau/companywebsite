import React from 'react'

export default () => {
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
            <div className="col-md-4">
              <p className="font-weight-bold h5">Contact</p>
              <p className="mb-0 font-weight-bold">Lorem ipsum dolor sit amet consectetur.</p>
              <p className="mb-0">4 Rivers GmbH</p>
              <p className="mb-0">Johann Belau</p>
              
              <p className="mb-0">Forsterstr. 37a</p>
              
              <p className="mb-0">55118 Mainz</p>
              
              <p className="mb-0">info@4rivers.de</p>
              <p className="">+49 (0) 1234 567 89 10</p>
            </div>
            <div className="col-md-3 offset-md-1">
              <p className="font-weight-bold h5">
                Legal
              </p>
              <ul className="list-unstyled">
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Imprint</a></li>
                <li><a href="#">Imprint</a></li>
              </ul>
            </div>
            <div className="col-md-3 offset-md-1">
              
            </div>
          </div>
          <hr className="mt-4 border-primary mb-4"/>
          <div className="row justify-content-between">
              <div className="col-lg-4">
                <span className="text-muted small ml-2">©2020 4RIVERS · Versionen des Lorem · Versionen des</span>
              </div>
              <div className="col-lg-2 d-flex justify-content-between col-6 mt-3 mt-md-0">
                
                <a href="#" className="social-link">
                  <img src="/img/social/Instagram.svg" alt="Instagram" width="16" height="16"/>
                </a>
                
                <a href="#" className="social-link">
                  <img src="/img/social/fb.svg" alt="fb" width="16" height="16"/>
                </a>
                
                <a href="#" className="social-link">
                  <img src="/img/social/in.svg" alt="in" width="16" height="16"/>
                </a>
                
                <a href="#" className="social-link">
                  <img src="/img/social/twitter.svg" alt="twitter" width="16" height="16"/>
                </a>
                
                <a href="#" className="social-link">
                  <img src="/img/social/yt.svg" alt="yt" width="16" height="16"/>
                </a>
                
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}
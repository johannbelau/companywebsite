import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'

import NavigationItems from '../data/navigation.yaml'

export default () => {

  const [isActive, setNavActive] = useState(false)
  const [isLarge, setNavbarLarge] = useState(true)

  const changeNavBackground = () => {
    const scrolledThrough = window.scrollY >= 109;
    if (scrolledThrough && isLarge) {
      document.body.classList.add("nav-bg-white", 'nav-shrink');
      setNavbarLarge(false)
    } else if(!scrolledThrough) {
      document.body.classList.remove("nav-bg-white", 'nav-shrink');
      setNavbarLarge(true)
    }
  }
  
  const ref = useRef();

  const useOutsideClick = (ref, cb) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb()
      }
    }
    useEffect(() => {
      window.addEventListener('click', handleClick);

      return () => {
        window.removeEventListener('click', handleClick);
      }
    })
  }
  useEffect(() => {
    document.addEventListener('load', changeNavBackground)
    return () => {
      document.removeEventListener('load', changeNavBackground)
    }
  })

  useOutsideClick(ref, () => {
    if (isActive) {
      setNavActive(!isActive)
    }
  });

  const handleNavCollapse = () => setNavActive(!isActive);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground)
    return () => {
      window.removeEventListener('scroll', changeNavBackground)
    }
  })

  return (
    <nav className="navbar navbar-expand-md fixed-top" ref={ref}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/img/logo white.png" width="315" height="67" className="align-top logo logo-white" alt="4 Rivers GmbH white"/>
          <img src="/img/logo-blue.png" width="315" height="67" className="align-top logo logo-blue" alt="4 Rivers GmbH blue"/>
          <span className="sr-only">4 Rivers GmbH</span>
        </Link>
        <button 
          className={isActive? "navbar-toggler mr-n2"  : "navbar-toggler mr-n2 collapsed" }
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded={isActive? "true" : "false"} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
          >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className={isActive? "show collapse navbar-collapse" : "collapse navbar-collapse"} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto text-uppercase mt-3 mt-sm-0">
              {
                NavigationItems.map((item, idx) => {
                  return (
                    <li className="nav-item" key={`nav-tiem-${idx}`}>
                      <Link className="nav-link" to={ item.href }>{ item.title }</Link>
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
    </nav>
)}
import React, { useEffect } from 'react'
import { Link } from 'gatsby'



export default () => {

  const changeNavBackground = () => {
    const scrolledThrough = window.scrollY >= 109;
    if (scrolledThrough) {
      document.body.classList.add("nav-bg-white", 'nav-shrink');
    } else if(!scrolledThrough) {
      document.body.classList.remove("nav-bg-white", 'nav-shrink');
    }
  }

  useEffect(() => {
    document.addEventListener('load', changeNavBackground)
    return () => {
      document.removeEventListener('load', changeNavBackground)
    }
  })

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground)
    return () => {
      window.removeEventListener('scroll', changeNavBackground)
    }
  })
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="">
          <img src="/img/4Rivers_Logo.svg" width="160" height="48" className="d-inline-block align-top logo" alt="4 Rivers GmbH" loading="lazy"/>
        </a>
        <ul className="navbar-nav mr-0 justify-content-md-between main-nav flex-row">
          <li className="nav-item">
            <a className="px-2 py-1 nav-link  text-primary  rounded-lg" href="/companywebsite/en">en</a>
          </li>
          <li className="nav-item">
            <a className="px-2 py-1 nav-link bg-primary text-white rounded-lg" href="/companywebsite/">de</a>
          </li> 
        </ul>
      </div>
    </nav>
)}
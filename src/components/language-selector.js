import React from 'react'
import { Link } from "gatsby";
import { useLocation } from "@reach/router"

import NavItems from './nav-items'

export default function (props) {

  const {lang} = props
  const location = useLocation();

  if (lang === 'en') {
    return (
      <ul className="navbar-nav mr-0 justify-content-md-between main-nav flex-row">
          <NavItems lang='en' />
        <li className="nav-item">
          <Link
            className="px-2 py-1 nav-link bg-primary text-white rounded-lg"
            to={`${location.pathname}`}
          >
            en
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="px-2 py-1 nav-link  text-primary  rounded-lg "
            to={location.pathname.replace("/" + lang + "/", "/")}
          >
            de
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <ul className="navbar-nav mr-0 justify-content-md-between main-nav flex-row">
      <NavItems lang='de' />
      <li className="nav-item">
        <Link
          className="px-2 py-1 nav-link  text-primary  rounded-lg"
          to={`/en${location.pathname}`}
        >
          en
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="px-2 py-1 nav-link bg-primary text-white rounded-lg"
          to={location.pathname.replace("/" + lang + "/", "/")}
        >
          de
        </Link>
      </li>
    </ul>
  )
}
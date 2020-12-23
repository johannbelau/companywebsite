import React from 'react'
import { Link } from "gatsby";
import { useLocation } from "@reach/router"

export default function (props) {

  const {lang} = props
  const location = useLocation();

  if (lang === 'de') {
    return (
      <ul className="navbar-nav mr-0 justify-content-md-between main-nav flex-row">
        <li className="nav-item">
          <Link
            disabled={true}
            className="px-2 py-1 nav-link  text-primary  rounded-lg"
            to={location.pathname.replace("/de/", "/")}
          >
            en
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="px-2 py-1 nav-link bg-primary text-white rounded-lg"
            to={`${location.pathname}`}
          >
            de
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <ul className="navbar-nav mr-0 justify-content-md-between main-nav flex-row">
      <li className="nav-item">
        <Link
          className="px-2 py-1 nav-link bg-primary text-white rounded-lg"
          to={location.pathname.replace("/" + lang + "/", "/")}
        >
          en
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="px-2 py-1 nav-link  text-primary  rounded-lg"
          to={`/de${location.pathname}`}
        >
          de
        </Link>
      </li>
    </ul>
  )
}
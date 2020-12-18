import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";

import appData from "../../app.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import LanguageSelector from "./language-selector";
import NavItems from "./nav-items";

export default (props) => {
  const { lang } = props;
  const [isActive, setNavActive] = useState(false);
  const [isLarge, setNavbarLarge] = useState(true);

  const changeNavBackground = () => {
    const scrolledThrough = window.scrollY >= 109;
    if (scrolledThrough && isLarge) {
      document.body.classList.add("nav-bg-white", "nav-shrink");
      setNavbarLarge(false);
    } else if (!scrolledThrough) {
      document.body.classList.remove("nav-bg-white", "nav-shrink");
      setNavbarLarge(true);
    }
  };

  const ref = useRef();

  const useOutsideClick = (ref, cb) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
      }
    };
    useEffect(() => {
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("click", handleClick);
      };
    });
  };
  useEffect(() => {
    document.addEventListener("load", changeNavBackground);
    return () => {
      document.removeEventListener("load", changeNavBackground);
    };
  });

  useOutsideClick(ref, () => {
    if (isActive) {
      setNavActive(!isActive);
    }
  });

  const handleNavCollapse = () => setNavActive(!isActive);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  });
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top bg-white"
        ref={ref}
      >
       
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/img/4Rivers_Logo.svg"
              width="160"
              height="48"
              className="d-inline-block align-top logo"
              alt="4 Rivers GmbH"
              loading="lazy"
            />
          </Link>

          {/* <div className="row d-lg-none d-flex justify-content-end">
            <div className="col-auto">
              <LanguageSelector lang={lang} />
            </div>
          </div> */}

          <button
            className={
              isActive
                ? "navbar-toggler mr-n2"
                : "navbar-toggler mr-n2 collapsed"
            }
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isActive ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          
            <div
              className={
                isActive
                  ? "show collapse navbar-collapse flex-column d-flex"
                  : "collapse navbar-collapse flex-column"
              }
              id="navbarSupportedContent"
            >
              
              <div className="row justify-content-lg-end w-100 no-gutters order-lg-1 order-2 mt-4 mt-lg-0">
                <div className="col-auto">
                  <Link
                    to={`mailto:${appData.email}`}
                    className="small mr-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-primary mx-1"
                    />
                    {appData.email}
                  </Link>
                </div>
                <div className="col-auto">
                  <Link 
                    to={`tel:${appData.phone}`}
                    className="small mr-2">
                    <FontAwesomeIcon icon={faPhone} className="text-primary mx-1" />
                    {appData.phone}
                  </Link>
                </div>
              </div>
              
              <div className="d-flex flex-lg-row flex-column justify-content-lg-end w-100 order-lg-2 order-1">
                <ul className="navbar-nav ml-lg-auto my-3 my-sm-0">
                  
                  <NavItems lang={lang} />
                  
                  
                </ul>
                <LanguageSelector lang={lang} />
              </div>
            </div>
          
        </div>
      </nav>
    </>
  );
};

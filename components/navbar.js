import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar-navbar ${props.rootClassName} `}>
        <Link href="/">
          <a className="navbar-link">
            <h1 className="navbar-caption">{props.caption}</h1>
          </a>
        </Link>
        <div className="navbar-nav-content">
          <div className="navbar-nav-links">
            <span className="navbar-link01 nav-link">Explore</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Contact us</span>
            <span className="nav-link">         </span>
          </div>
          <Link href="/sign-in">
            <a className="navbar-link05">
              <div className="navbar-get-started get-started">
                <span className="navbar-text">log in</span>
              </div>
            </a>
          </Link>
          <div className="navbar-get-started1 get-started">
            <span className="navbar-text1">Get started</span>
          </div>
          <div id="open-mobile-menu" className="navbar-hamburger get-started">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navbar-image"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-branding">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="navbar-image1"
            />
            <div id="close-mobile-menu" className="navbar-container">
              <svg viewBox="0 0 1024 1024" className="navbar-icon">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-nav-links1">
            <span className="nav-link">Features</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Prices</span>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <span className="navbar-text2">Get started</span>
          </div>
        </div>
        <div>
          <div className="navbar-container2">
            <React.Fragment>
              <Script>{`
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
`}</Script>
            </React.Fragment>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: 1200px;
            align-self: auto;
            align-items: center;
            flex-shrink: 1;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .navbar-link {
            display: contents;
          }
          .navbar-caption {
            color: rgb(255, 255, 255);
            font-size: 40px;
            align-self: center;
            text-align: center;
            font-family: Poppins;
            line-height: 30px;
            text-decoration: none;
          }
          .navbar-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-nav-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            border-color: transparent;
          }
          .navbar-link01 {
            text-decoration: none;
          }
          .navbar-link05 {
            display: contents;
          }
          .navbar-get-started {
            text-decoration: none;
            background-color: #2a2a2a;
          }
          .navbar-text {
            color: rgb(255, 255, 255);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 500;
            font-stretch: normal;
          }
          .navbar-get-started1 {
            background-color: #ff7200;
          }
          .navbar-text1 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-hamburger {
            display: none;
          }
          .navbar-image {
            width: 100px;
            object-fit: cover;
          }
          .navbar-mobile-menu {
            gap: var(--dl-space-space-twounits);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image1 {
            width: 100px;
            filter: brightness(0) saturate(100%);
            object-fit: cover;
          }
          .navbar-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-icon {
            width: 24px;
            height: 24px;
          }
          .navbar-nav-links1 {
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-gray-black);
            display: flex;
            flex-direction: column;
          }
          .navbar-text2 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-container2 {
            display: contents;
          }

          @media (max-width: 991px) {
            .navbar-caption {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .navbar-caption {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Poppins;
              line-height: 24px;
            }
            .navbar-nav-links {
              display: none;
            }
            .navbar-get-started {
              display: none;
            }
            .navbar-get-started1 {
              display: none;
            }
            .navbar-hamburger {
              display: flex;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-image {
              width: 16px;
              height: 14px;
            }
            .navbar-branding {
              width: 100%;
            }
            .navbar-nav-links1 {
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  text1: 'log in',
  caption: 'Digital Treats',
  text: 'log in',
  imageAlt: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageSrc: '/Icons/hamburger-200h.webp',
  imageAlt1: 'image',
  rootClassName: '',
  brandingLogo:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08e9141c-e9e9-4d51-994d-22f260b21c68/0f4ac702-51a5-4a68-8182-06e3f427edb8?org_if_sml=14251',
}

Navbar.propTypes = {
  text1: PropTypes.string,
  caption: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default Navbar

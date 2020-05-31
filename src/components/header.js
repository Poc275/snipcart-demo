import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./headers/logo"

const Header = ({ siteTitle }) => (
  <div>
    <header id="sticky" className="sticky">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="main-menu">
              <div className="menu-left">
                <div className="brand-logo">
                  <Logo logo={'logo.png'} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

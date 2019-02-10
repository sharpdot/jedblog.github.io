import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import theme from "../styles/theme"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `none`,
      width: `100%`,
      position: `fixed`,
      background: theme.colors.greyGreen,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: theme.colors.greyDark,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

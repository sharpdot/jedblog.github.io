import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import theme from "../styles/theme"


const Footer = styled.footer`
  background-color: ${theme.colors.greyGreen};
  div {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <Footer>
            <div>
              © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

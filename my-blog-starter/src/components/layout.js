import React from "react"
import { Link } from "gatsby"
import Header from "./header"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <Header/>
    } else {
      header = (
        <header>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#007acc`,
              }}
              to={`/`}
            >
              {"wonderley.io"}
            </Link>
          </h3>
        </header>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Layout

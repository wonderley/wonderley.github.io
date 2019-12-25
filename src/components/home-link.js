import React from "react"
import { Link } from "gatsby"
const HomeLink = () => {
  return (
    <h3
    style={{
      display: "inline",
      fontFamily: `Montserrat, sans-serif`,
      marginTop: 0,
    }}>
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
  );
}
export default HomeLink;
import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <div className="nav">
          <Link className="header-link-home" to="/rugby-league">
            Rugby League
          </Link>
          <Link className="header-link-home" to="/nrl-supercoach-ai">
            NRL Supercoach AI
          </Link>
        </div>
      </>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <Link className="header-link-home" to="/rugby-league">
          Rugby League
        </Link>
        <Link className="header-link-home" to="/nrl-supercoach-ai">
          NRL Supercoach AI
        </Link>
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

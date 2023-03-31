/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const RugbyLeagueIntro = () => {
  const data = useStaticQuery(graphql`
    query RugbyLeagueIntroQuery {
      site {
        siteMetadata {
          rugbyLeague {
              summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const rugbyLeagueMeta = data.site.siteMetadata?.rugbyLeague

  return (
    <div className="blog-intro">
        <p>
          {rugbyLeagueMeta.summary}
        </p>
        <img src="https://github.com/jackpink/pink.ai/blob/master/static/book-studying.gif?raw=true" width="440" height="460" />
    </div>
  )
}

export default RugbyLeagueIntro
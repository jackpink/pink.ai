/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const NRLSupercoachAIIntro = () => {
  const data = useStaticQuery(graphql`
    query NRLSupercoachAIIntroQuery {
      site {
        siteMetadata {
          nrlSupercoachAI {
              summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const nrlSupercoachAIMeta = data.site.siteMetadata?.nrlSupercoachAI

  return (
    <div className="blog-intro">
        <p>
          {nrlSupercoachAIMeta.summary}
        </p>
        
    </div>
  )
}

export default NRLSupercoachAIIntro
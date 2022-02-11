/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 
 const TechBlogIntro = () => {
   const data = useStaticQuery(graphql`
     query TechBlogIntroQuery {
       site {
         siteMetadata {
           techBlog {
               summary
           }
         }
       }
     }
   `)
 
   // Set these values by editing "siteMetadata" in gatsby-config.js
   const techBlogMeta = data.site.siteMetadata?.techBlog
 
   return (
     <div className="blog-intro">
         <p>
           {techBlogMeta.summary}
         </p>
         <iframe src="https://giphy.com/embed/H48YKEw3fXrcvIF2xE" width="480" height="460" title="learning-gif" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
     </div>
   )
 }
 
 export default TechBlogIntro
 
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
         <img src="https://github.com/jackpink/pink.ai/blob/master/static/book-studying.gif?raw=true" width="440" height="460" />
     </div>
   )
 }
 
 export default TechBlogIntro
 
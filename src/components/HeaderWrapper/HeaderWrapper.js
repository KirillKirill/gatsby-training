import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header/Header"

export default function HeaderWrapper() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark {
        frontmatter {
          description
          title
        }
      }
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 125, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Header data={data} />
}

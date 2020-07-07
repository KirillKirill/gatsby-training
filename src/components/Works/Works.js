import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Works() {
  const icon = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon1.svg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        extension
        publicURL
      }
    }
  `)
  console.log(icon)
  console.log()
  // if (!childImageSharp && extension === "svg") {
  //   return <img style={imageStyle} src={publicURL} alt={alt} />
  // }

  return <div>1111</div>
}

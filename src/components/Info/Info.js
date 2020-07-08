import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./InfoStyles"

const Info = () => {
  const {
    info: {
      frontmatter: { title },
    },
  } = useStaticQuery(graphql`
    query {
      info: markdownRemark(frontmatter: { componentName: { eq: "info" } }) {
        frontmatter {
          title
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default Info

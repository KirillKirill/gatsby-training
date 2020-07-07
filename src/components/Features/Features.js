import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./FeaturesStyles"

const Features = () => {
  const {
    features: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      features: markdownRemark(
        frontmatter: { pageName: { eq: "feature-types" } }
      ) {
        frontmatter {
          features
          title
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.Title>{frontmatter.title}</S.Title>
      <S.Row>
        <S.FeaturesContainer>
          <S.VioletBlock width={440} />
          <S.TextContainer>
            {frontmatter.features.map((el, idx) => (
              <S.Text key={idx}>{el}</S.Text>
            ))}
          </S.TextContainer>
        </S.FeaturesContainer>
        <S.BlackRectangle>
          <S.YellowRectangle />
        </S.BlackRectangle>
      </S.Row>
    </S.Container>
  )
}

export default Features

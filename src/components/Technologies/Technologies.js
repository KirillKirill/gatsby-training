import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./TechnologiesStyles"

const Technologies = () => {
  const {
    icons,
    technologies: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      icons: allFile(
        filter: {
          extension: { eq: "svg" }
          relativeDirectory: { eq: "technologyIcons" }
        }
      ) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
      technologies: markdownRemark(
        frontmatter: { pageName: { eq: "technologies" } }
      ) {
        frontmatter {
          technologies
          title
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.Title>{frontmatter.title}</S.Title>
      <S.BadgesContainer>
        {frontmatter.technologies.map((el, idx) => (
          <S.TechContainer key={icons.edges[idx].node.id}>
            <S.Badge>
              <S.BadgeIcon src={icons.edges[idx].node.publicURL} />
            </S.Badge>
            <S.BadgeLabel>{el}</S.BadgeLabel>
          </S.TechContainer>
        ))}
      </S.BadgesContainer>
    </S.Container>
  )
}

export default Technologies

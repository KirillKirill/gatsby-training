import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./TeamStyles"
import Slider from "../Slider/Slider"

const Team = () => {
  const {
    team: {
      frontmatter: { title, teamData },
    },
    images,
  } = useStaticQuery(graphql`
    query {
      team: markdownRemark(frontmatter: { componentName: { eq: "team" } }) {
        frontmatter {
          teamData {
            name
            position
            imgName
            imgHoverName
          }
          title
        }
      }
      images: allFile(
        filter: {
          extension: { eq: "webp" }
          relativeDirectory: { eq: "teamImages" }
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
    }
  `)

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Background>
        <Slider images={images.edges} personal={teamData} />
      </S.Background>
    </S.Container>
  )
}

export default Team

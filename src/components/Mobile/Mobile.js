import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./MobileStyles"

const Mobile = () => {
  const {
    icons,
    mobile: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      icons: allFile(
        filter: {
          extension: { eq: "svg" }
          relativeDirectory: { eq: "mobileIcons" }
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
      mobile: markdownRemark(frontmatter: { componentName: { eq: "mobile" } }) {
        frontmatter {
          title
          subtitle
          review
          reviewSubtitle
        }
      }
    }
  `)

  const phoneSrc = icons.edges.find(el => el.node.name === "phone").node
    .publicURL
  const quoteSrc = icons.edges.find(el => el.node.name === "quote").node
    .publicURL

  return (
    <S.Container>
      <S.Row>
        <S.BigBlackRectangle>
          <S.YellowRectangle />
        </S.BigBlackRectangle>
        <S.TitlesBlock>
          <S.Title>{frontmatter.title}</S.Title>
          <S.Subtitle>{frontmatter.subtitle}</S.Subtitle>
        </S.TitlesBlock>
      </S.Row>
      <S.Row>
        <S.MobileBlock>
          <S.MobileBackground>
            <S.MobileIcon src={phoneSrc} />
          </S.MobileBackground>
          <S.QuoteBlock>
            <S.QuoteImg src={quoteSrc} />
            <S.Review>{frontmatter.review}</S.Review>
            <S.ReviewSubtitle>{frontmatter.reviewSubtitle}</S.ReviewSubtitle>
            <S.Button>View more works</S.Button>
          </S.QuoteBlock>
        </S.MobileBlock>
        <S.RedRectangle>
          <S.MediumBlackRectangle />
        </S.RedRectangle>
      </S.Row>
      <S.LittleBlackRectangle />
    </S.Container>
  )
}

export default Mobile

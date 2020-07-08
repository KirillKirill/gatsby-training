import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./OffersStyles"

const Offers = () => {
  const {
    offers: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      offers: markdownRemark(frontmatter: { componentName: { eq: "offers" } }) {
        frontmatter {
          offers1
          offers2
          title
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.Title>{frontmatter.title}</S.Title>
      <S.Row>
        <S.VioletRectangle>
          <S.YellowRectangle />
        </S.VioletRectangle>
        <S.OffersContainer>
          <S.PurpleBlock width={700} />
          <S.TextContainer>
            {frontmatter.offers1.map((el, idx) => (
              <S.Text key={idx}>{el}</S.Text>
            ))}
          </S.TextContainer>
        </S.OffersContainer>
        <S.RedRectangle />
      </S.Row>
      <S.Row>
        <S.OffersContainer>
          <S.PurpleBlock width={1220} />
          <S.TextContainer>
            {frontmatter.offers2.map((el, idx) => (
              <S.Text key={idx}>{el}</S.Text>
            ))}
          </S.TextContainer>
        </S.OffersContainer>
      </S.Row>
    </S.Container>
  )
}

export default Offers

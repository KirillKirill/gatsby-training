import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./FooterStyles"
import ContactForm from "../ContactForm/ContactForm"

const Footer = () => {
  const {
    footer: {
      frontmatter: { text },
    },
  } = useStaticQuery(graphql`
    query {
      footer: markdownRemark(frontmatter: { componentName: { eq: "footer" } }) {
        frontmatter {
          text
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.LeftBlock>
        <S.ContentBlock>
          <S.Title>{text}</S.Title>
          <ContactForm text={text} />
        </S.ContentBlock>
      </S.LeftBlock>
      <S.RightBlock>
        <S.Cross />
      </S.RightBlock>
    </S.Container>
  )
}

export default Footer

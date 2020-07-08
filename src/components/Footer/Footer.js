import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./FooterStyles"

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
          <S.InputsContainer>
            <S.Input name="Name" placeholder="Name" />
            <S.Input name="Email" placeholder="E-mail" />
          </S.InputsContainer>
          <S.TextArea name="Message" placeholder="Message" />
          <S.Button>Send</S.Button>
        </S.ContentBlock>
      </S.LeftBlock>
      <S.RightBlock>
        <S.Cross />
      </S.RightBlock>
    </S.Container>
  )
}

export default Footer

import React from "react"
import * as S from "./HeaderStyles"

export default function Header({ data }) {
  const { markdownRemark, logo } = data
  const renderFiguresBlock = () => (
    <S.FiguresBlock>
      <S.AbsolutedVioletSquare>
        <S.AbsolutedWhiteSquare />
      </S.AbsolutedVioletSquare>
      <S.RedFigure />
      <S.VioletFigure />
      <S.VioletFigureVertical />
      <S.BlackFigure />
      <S.DescriptionBlock>
        <p>{markdownRemark.frontmatter.description}</p>
      </S.DescriptionBlock>
      {renderCross()}
    </S.FiguresBlock>
  )

  const renderCross = () => (
    <S.Cross>
      <S.HorizontalHalf>
        <S.Row>
          <S.YellowCell />
          <S.RedCell />
        </S.Row>
        <S.Row>
          <S.BlackCell />
          <S.YellowCell />
        </S.Row>
      </S.HorizontalHalf>
      <S.VerticalHalf>
        <S.Row>
          <S.YellowCell />
          <S.RedCell />
        </S.Row>
        <S.Row>
          <S.BlackCell />
          <S.YellowCell />
        </S.Row>
      </S.VerticalHalf>
    </S.Cross>
  )

  return (
    <S.Header>
      <S.HeaderLeftPart>
        <S.LogoContainer>
          <img src={logo.childImageSharp.fluid.src} alt="banner" />
        </S.LogoContainer>
        <S.LeftBlackRectangle />
        <S.Title>{markdownRemark.frontmatter.title}</S.Title>
        <S.Button>Let's talk</S.Button>
        <S.RightBlackRectangle />
        <S.RedRectangle>
          <S.YellowRectangle>
            <S.AbsolutedBlackRectangle />
          </S.YellowRectangle>
        </S.RedRectangle>
      </S.HeaderLeftPart>
      <S.HeaderRightPart>{renderFiguresBlock()}</S.HeaderRightPart>
    </S.Header>
  )
}

import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  padding: 0 180px;

  & > div:first-child {
    margin-bottom: 78px;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitlesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 260px;
`

export const Title = styled.h3`
  width: 320px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
  text-align: right;
`

export const Subtitle = styled.p`
  width: 427px;
  text-align: right;
  color: ${({ theme }) => theme.colors.contextGrey};
`

export const BigBlackRectangle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.contextBlack};
`

export const YellowRectangle = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.contextYellow};
`

export const RedRectangle = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-top: -38px;
  background-color: ${({ theme }) => theme.colors.contextRed};
`

export const MediumBlackRectangle = styled.div`
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 90px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.contextBlack};
`

export const LittleBlackRectangle = styled.div`
  position: absolute;
  bottom: -40px;
  right: 440px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.contextBlack};
`

export const MobileBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -180px;
`

export const MobileBackground = styled.div`
  position: relative;
  width: 709px;
  height: 294px;
  background-color: ${({ theme }) => theme.colors.contextViolet};
`

export const MobileIcon = styled.img`
  position: absolute;
  top: -78px;
  right: 49px;
  max-height: 450px;
  max-width: 220px;
`

export const QuoteBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`

export const QuoteImg = styled.img`
  max-width: 40px;
  max-height: 30px;
`

export const Review = styled.p`
  margin: 40px 0 20px;
  width: 590px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
`

export const ReviewSubtitle = styled.p`
  line-height: 18px;
  color: ${({ theme }) => theme.colors.contextGrey};
  flex-grow: 1;
`

export const Button = styled.button`
  width: 250px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.contextBlack};
  background-color: #ffffff;
  line-height: 18px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
`

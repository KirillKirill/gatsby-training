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
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  text-align: right;
  color: #535b66;
`

export const BigBlackRectangle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #1e242f;
`

export const YellowRectangle = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #ffd363;
`

export const RedRectangle = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-top: -38px;
  background-color: #f03f5f;
`

export const MediumBlackRectangle = styled.div`
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 90px;
  height: 90px;
  background-color: #1e242f;
`

export const LittleBlackRectangle = styled.div`
  position: absolute;
  bottom: 0;
  right: 440px;
  width: 40px;
  height: 40px;
  background-color: #1e242f;
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
  background-color: #7a3bff;
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
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #535b66;
  flex-grow: 1;
`

export const Button = styled.button`
  width: 250px;
  height: 40px;
  border: 2px solid #1e242f;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
`

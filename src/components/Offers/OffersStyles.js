import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
`

export const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`

export const Title = styled.h3`
  width: 225px;
  margin: 0 440px 0 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
  align-self: flex-end;
`

export const RedRectangle = styled.div`
  margin-right: 440px;
  width: 90px;
  height: 90px;
  background-color: #f03f5f;
`

export const VioletRectangle = styled.div`
  position: absolute;
  top: 150px;
  left: 180px;
  width: 140px;
  height: 140px;
  background-color: #7a3bff;
  z-index: 1;
`

export const YellowRectangle = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 90px;
  left: 100px;
  background-color: #ffd363;
`

export const PurpleBlock = styled.div`
  width: ${props => props.width}px;
  height: 190px;
  background: #eff2f8;
  opacity: 0.4;
  border-right: 15px solid #7a3bff;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  font-weight: 300;
  font-size: 16px;
  line-height: 200%;
  color: #535b66;
`

export const OffersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

import styled from "styled-components"
import {
  Container,
  Row,
  PurpleBlock,
  TextContainer,
  OffersContainer,
  Text,
} from "../Offers/OffersStyles"

export const Title = styled.h3`
  width: 430px;
  margin: 0 0 0 440px;
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
  align-self: flex-start;
`

export const FeaturesContainer = styled(OffersContainer)``

export const VioletBlock = styled(PurpleBlock)`
  height: 280px;
`

export const BlackRectangle = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-right: 180px;
  background-color: #1e242f;
`

export const YellowRectangle = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 60px;
  height: 60px;
  background-color: #ffd363;
`

export { Container, Row, TextContainer, Text }

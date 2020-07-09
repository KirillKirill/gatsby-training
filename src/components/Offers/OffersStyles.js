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
  width: 216px;
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
  background-color: ${({ theme }) => theme.colors.contextRed};
`

export const VioletRectangle = styled.div`
  position: absolute;
  top: 150px;
  left: 180px;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.contextViolet};
  z-index: 1;
`

export const YellowRectangle = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 90px;
  left: 100px;
  background-color: ${({ theme }) => theme.colors.contextYellow};
`

export const PurpleBlock = styled.div`
  width: ${props => props.width}px;
  height: 190px;
  background: #eff2f8;
  opacity: 0.4;
  border-right: 15px solid ${({ theme }) => theme.colors.contextViolet};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`

export const OffersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.span`
  line-height: 200%;
  color: ${({ theme }) => theme.colors.contextGrey};
`

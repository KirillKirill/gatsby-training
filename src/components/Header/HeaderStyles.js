import styled from "styled-components"

export const Header = styled.header`
  display: flex;

  * > img {
  }

  * > p {
    margin: 0;
  }
`

export const HeaderLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 1080px;
  padding-left: 180px;
`

export const LogoContainer = styled.div`
  margin-top: 40px;
`

export const LogoImage = styled.img`
  width: 120px;
  height: 50px;
`

export const Button = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 50px;
  border: 2px solid #000000;
  background-color: #ffffff;
  cursor: pointer;
  outline: none;
`

export const Title = styled.h1`
  width: 520px;
  font-size: 80px;
  margin: 60px 0 0 0;
  line-height: 110%;
`

export const RedRectangle = styled.div`
  position: relative;
  margin-top: auto;
  margin-left: -180px;
  width: 200px;
  height: 200px;
  background-color: #f03f5f;
`

export const YellowRectangle = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 120px;
  height: 120px;
  background-color: #ffd363;
`
export const BlackRectangle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #1e242f;
`

export const LeftBlackRectangle = styled(BlackRectangle)`
  margin-left: -40px;
  margin-top: 160px;
`

export const RightBlackRectangle = styled(BlackRectangle)`
  margin-top: 60px;
  margin-left: 260px;
`

export const AbsolutedBlackRectangle = styled(BlackRectangle)`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const HeaderRightPart = styled.div`
  display: flex;
  width: 50%;
`

export const DescriptionBlock = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  display: block;
  bottom: 70px;
  height: 220px;
  width: 830px;
  padding: 50px 180px 50px 50px;
  background-color: #ffffff;
`

export const DescriptionText = styled.p`
  margin: 0;
  color: #535b66;
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
`

export const FiguresBlock = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 260px 700px;
  grid-template-rows: 384px 696px;
  grid-template-areas: "redArea violetArea" "violetVerticalArea blackArea";
`

export const RedFigure = styled.div`
  background-color: #f03f5f;
  grid-area: redArea;
`

export const BlackFigure = styled.div`
  background-color: #1e242f;
  grid-area: blackArea;
`

export const VioletFigure = styled.div`
  background-color: #7a3bff;
  grid-area: violetArea;
`

export const VioletFigureVertical = styled(VioletFigure)`
  grid-area: violetVerticalArea;
`

export const Cross = styled.div`
  position: absolute;
  top: 234px;
  left: 110px;
  width: 300px;
  height: 300px;
  z-index: 1;
`

export const HorizontalHalf = styled.div`
  position: absolute;
  top: calc(50% - 42px);
  left: 0;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 84px;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`

export const Cell = styled.div`
  width: 50%;
  height: 100%;
`

export const YellowCell = styled(Cell)`
  background-color: #ffd363;
`

export const RedCell = styled(Cell)`
  background-color: #f03f5f;
`

export const BlackCell = styled(Cell)`
  background-color: #1e242f;
`

export const VerticalHalf = styled(HorizontalHalf)`
  transform: rotate(90deg) scale(-1, 1);
  z-index: 2;
`

export const AbsolutedVioletSquare = styled.div`
  position: absolute;
  top: 70px;
  left: -85px;
  width: 170px;
  height: 170px;
  background-color: #7a3bff;
`

export const AbsolutedWhiteSquare = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
`

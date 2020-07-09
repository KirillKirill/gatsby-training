import styled from "styled-components"
import is from "styled-is"

export const SliderContainer = styled.div`
  position: absolute;
  bottom: 70px;
  left: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  z-index: 3;
`

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  width: 700px;
  margin-right: 130px;
  background-color: #1e242f;
`

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 16px;
  width: 80px;
  background-color: transparent;
  border: none;
  margin-right: 60px;
  cursor: pointer;
`

export const RightArrow = styled.img``

export const LeftArrow = styled(RightArrow)`
  transform: rotate(180deg);
`

export const SliderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > :last-child {
    margin-right: 0;
  }
`

export const Slide = styled.div`
  margin-right: 50px;
`

export const SlideHeader = styled.div`
  display: none;

  ${is("isActive")`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  `};
`

export const PersonName = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
`

export const PersonPosition = styled.span`
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #535b66;
`

export const SlideBackground = styled.div`
  width: 299px;
  height: 392px;
  background: ${props => `url(${props.imageURL}) no-repeat center center`};
`

import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
`

export const Title = styled.h3`
  margin-left: 440px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`

export const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-top: 155px;
  background-color: #ffffff;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    background-color: #FFD363;
`

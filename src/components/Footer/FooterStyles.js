import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  height: 540px;
  width: 100%;
  margin-top: 300px;
`

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 1220px;
  background-color: ${({ theme }) => theme.colors.contextBlack};
`

export const RightBlock = styled.div`
  position: relative;
  width: 720px;
  background-color: ${({ theme }) => theme.colors.contextViolet};
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.contextRed};
  }
`

export const Cross = styled.div`
  position: absolute;
  top: calc(50% - 85px);
  left: -23px;
  height: 170px;
  width: 46px;
  background-color: ${({ theme }) => theme.colors.contextYellow};
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 170px;
    height: 46px;
    background-color: ${({ theme }) => theme.colors.contextYellow};
  }
`

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  margin: 100px auto;
`

export const Title = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
`

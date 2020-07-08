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
  background-color: #1e242f;
`

export const RightBlock = styled.div`
  position: relative;
  width: 720px;
  background-color: #7a3bff;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f03f5f;
  }
`

export const Cross = styled.div`
  position: absolute;
  top: calc(50% - 85px);
  left: -23px;
  height: 170px;
  width: 46px;
  background-color: #ffd363;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 170px;
    height: 46px;
    background-color: #ffd363;
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

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  & > input:first-child {
    margin-right: 20px;
  }
`

export const Input = styled.input`
  width: 200px;
  height: 40px;
  padding: 8px 15px;
  background-color: #333a45;
  opacity: 0.5;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  border: none;
`

export const TextArea = styled.textarea`
  max-width: 420px;
  max-height: 100px;
  margin-top: 20px;
  padding: 15px;
  background-color: #333a45;
  opacity: 0.5;
  border: none;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`

export const Button = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 40px;
  background-color: #7a3bff;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`

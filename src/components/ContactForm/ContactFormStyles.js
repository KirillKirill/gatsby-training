import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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

export const Button = styled.button.attrs({ type: "submit" })`
  width: 200px;
  height: 40px;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.contextViolet};
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

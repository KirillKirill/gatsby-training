import React, { useState } from "react"
import * as S from "./ContactFormStyles"

const ContactForm = () => {
  const [formValues, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  })

  const changeInputValue = e => {
    const { name, value } = e.target
    setFormValue({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const data = formValues
    const url = "http://localhost:1000/contact"

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(response => {
        alert("Message sent")
        console.log(response)
        setFormValue({
          name: "",
          email: "",
          message: "",
        })
      })
  }

  const { name, email, message } = formValues

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputsContainer>
        <S.Input
          name="name"
          placeholder="Name"
          value={name}
          onChange={changeInputValue}
        />
        <S.Input
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={changeInputValue}
        />
      </S.InputsContainer>
      <S.TextArea
        name="message"
        placeholder="Message"
        value={message}
        onChange={changeInputValue}
      />
      <S.Button disabled={!name || !email || !message}>Send</S.Button>
    </S.Form>
  )
}

export default ContactForm

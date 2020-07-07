import React from "react"
import Layout from "../components/Layout/Layout"
import HeaderWrapper from "../components/HeaderWrapper/HeaderWrapper"
import Projects from "../components/Projects/Projects"
import Offers from "../components/Offers/Offers"

export default function Home() {
  return (
    <Layout>
      <HeaderWrapper />
      <Projects />
      <Offers />
    </Layout>
  )
}

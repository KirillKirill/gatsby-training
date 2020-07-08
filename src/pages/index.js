import React from "react"
import Layout from "../components/Layout/Layout"
import HeaderWrapper from "../components/HeaderWrapper/HeaderWrapper"
import Projects from "../components/Projects/Projects"
import Offers from "../components/Offers/Offers"
import Features from "../components/Features/Features"
import Technologies from "../components/Technologies/Technologies"

export default function Home() {
  return (
    <Layout>
      <HeaderWrapper />
      <Projects />
      <Offers />
      <Features />
      <Technologies />
    </Layout>
  )
}

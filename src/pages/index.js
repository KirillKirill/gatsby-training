import React from "react"
import Layout from "../components/Layout/Layout"
import HeaderWrapper from "../components/HeaderWrapper/HeaderWrapper"
import Projects from "../components/Projects/Projects"
import Offers from "../components/Offers/Offers"
import Features from "../components/Features/Features"
import Technologies from "../components/Technologies/Technologies"
import Mobile from "../components/Mobile/Mobile"
import Info from "../components/Info/Info"

export default function Home() {
  return (
    <Layout>
      <HeaderWrapper />
      <Projects />
      <Offers />
      <Features />
      <Technologies />
      <Mobile />
      <Info />
    </Layout>
  )
}

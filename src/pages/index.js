import React from "react"
import Layout from "../components/Layout/Layout"
import HeaderWrapper from "../components/HeaderWrapper/HeaderWrapper"
import Works from "../components/Works/Works"

export default function Home() {
  return (
    <Layout>
      <HeaderWrapper />
      <Works />
    </Layout>
  )
}

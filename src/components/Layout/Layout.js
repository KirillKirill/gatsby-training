import React from "react"
import layoutStyles from "./layout.module.css"
import { ThemeProvider } from "styled-components"
import defaultTheme from "../../themes/index"

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={layoutStyles.container}>{children}</div>
    </ThemeProvider>
  )
}

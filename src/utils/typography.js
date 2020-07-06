import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Ubuntu",
      styles: ["300", "500", "700"],
    },
  ],
})

typography.toString()

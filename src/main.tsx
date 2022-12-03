import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

import App from "./pages/App"

import "./assets/css/index.css"
import "./assets/fonts/IRANSansWeb.ttf"

const theme = createTheme({
  direction: "rtl",
})

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

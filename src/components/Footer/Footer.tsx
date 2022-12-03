import { Box } from "@mui/material"

import { Head, Body, Aboute, CopyRight } from "./components"

export default function Footer() {
  return (
    <>
      <Box sx={{ py: "33px", px: { xs: "10px", md: "80px" } }}>
        <Head />
        <Body />
        <Aboute />
      </Box>
      <CopyRight />
    </>
  )
}

import { useEffect } from "react"
import { Box } from "@mui/material"

import { Header, Footer } from "./../../components"
import { Form } from "./components"

interface IProps {
  title: string
}

export default function Login({ title }: IProps) {
  //? Eddit page title
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <Box component="main" sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Form />
      <Footer />
    </Box>
  )
}

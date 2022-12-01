import { useEffect } from "react"
import { Box } from "@mui/system"

import { Intro } from "./components"
import { Header } from "./../../components"

interface IProps {
  title: string
}

export default function Home({ title }: IProps) {
  //? Eddit page title
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <Box component="main" sx={{display: "flex", flexDirection: "column"}}>
      <Header />
      <Intro />
    </Box>
  )
}

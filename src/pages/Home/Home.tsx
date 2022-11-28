import { useEffect } from "react"
import { Box } from "@mui/system"

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
    <Box component="main">
      <Header />
    </Box>
  )
}

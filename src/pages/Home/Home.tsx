import { useEffect } from "react"
import { Box } from "@mui/system"

import { Intro, Services as ServicesSection } from "./components"
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
    <Box component="main" sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Intro />
      {/* Main name "Services" */}
      <ServicesSection />
    </Box>
  )
}

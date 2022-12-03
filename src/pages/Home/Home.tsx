import { useEffect } from "react"
import { Box } from "@mui/system"

import { Intro, Services as ServicesSection, CTACreatForm } from "./components"
import { Header, Footer } from "./../../components"

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

      <CTACreatForm />

      <Footer />
    </Box>
  )
}

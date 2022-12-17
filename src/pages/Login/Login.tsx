import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"

import { Header, Footer, Loading } from "./../../components"
import { Form } from "./components"
import { useAuth } from "./../../hooks"

interface IProps {
  title: string
}

export default function Login({ title }: IProps) {
  const navigate = useNavigate()
  const [data] = useAuth()
  const [loading, setLoading] = useState<boolean>(true)

  //? Eddit page title
  useEffect(() => {
    document.title = title
  }, [])

  useEffect(() => {
    if (data !== undefined) {
      if (!data.expired) {
        navigate("/dashboard")
        setLoading(false)
      } else {
        setLoading(false)
      }
    } else {
      setLoading(true)
    }
  }, [data])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box component="main" sx={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Form />
          <Footer />
        </Box>
      )}
    </>
  )
}

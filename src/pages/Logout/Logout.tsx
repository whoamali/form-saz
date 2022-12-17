import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Loading } from "./../../components"

export default function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem("user")
    navigate("/")
  }, [])

  return <Loading />
}

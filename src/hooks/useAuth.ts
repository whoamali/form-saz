import { useState, useEffect } from "react"

import { axios } from "./../utils"

interface Data {
  email: string | null
  username: string | null
  id: string | null
  date: string | null
  expired: boolean
}

const dataDefaultValues: Data = {
  email: null,
  username: null,
  id: null,
  date: null,
  expired: false,
}

export default function useAuth() {
  const [data, setData] = useState<Data>()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user !== null) {
      axios("")
        .post("/auth", {
          token: JSON.parse(user).token,
        })
        .then(res => {
          if (res.data.status !== "error") {
            setData({ ...res.data.user, expired: false })
          } else {
            setData({ ...dataDefaultValues, expired: true })
          }
        })
        .catch(err => {
          console.log(err)
          setData({ ...dataDefaultValues, expired: true })
        })
    } else {
      setData({ ...dataDefaultValues, expired: true })
    }
  }, [])

  return [data]
}

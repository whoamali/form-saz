import { useEffect, useState } from "react"
import { Box, TextField, Button, CircularProgress } from "@mui/material"
import { useForm, SubmitHandler, ChangeHandler } from "react-hook-form"

import { axios } from "./../../../../../../utils"

interface Inputs {
  name: string
}

export default function DashboardUserInfoChangeName() {
  const [userInfo, setUserInfo] = useState<{ username: string; email: string }>(
    { username: "", email: "" },
  )
  const [defaultName, setDefaultName] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [active, setActive] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: defaultName,
    },
  })

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user !== null) {
      setUserInfo({
        username: JSON.parse(user).username,
        email: JSON.parse(user).email,
      })
      axios(JSON.parse(user).token)
        .get("/getname")
        .then(res => {
          if (res.data.name) {
            setDefaultName(res.data.name)
            setName(res.data.name)
          }
        })
    }
  }, [])

  useEffect(() => {
    if (name == "" || name == defaultName) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [name, defaultName])

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true)
    const user = localStorage.getItem("user")
    if (user !== null) {
      axios(JSON.parse(user).token)
        .post("/changename", data)
        .then(res => {
          setDefaultName(data.name)
          setLoading(false)
        })
    }
  }

  const onChange: ChangeHandler = async e => {
    setName(e.target.value)
  }

  return (
    <>
      <Box sx={{ mb: "30px" }}>
        <TextField
          label="نام و نام خانوادگی"
          fullWidth
          variant="outlined"
          value={name}
          {...register("name", { required: true, onChange })}
          error={errors.name ? true : false}
        />
      </Box>
      <Box sx={{ mb: "30px" }}>
        <TextField
          disabled
          label="نام کاربری"
          fullWidth
          variant="outlined"
          value={userInfo.username}
        />
      </Box>
      <Box sx={{ mb: "30px" }}>
        <TextField
          disabled
          label="ایمیل"
          fullWidth
          variant="outlined"
          value={userInfo.email}
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Button
          disabled={!active || loading}
          size="large"
          color="success"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          {loading ? <CircularProgress color="inherit" size="27px" /> : "ثبت"}
        </Button>
      </Box>
    </>
  )
}

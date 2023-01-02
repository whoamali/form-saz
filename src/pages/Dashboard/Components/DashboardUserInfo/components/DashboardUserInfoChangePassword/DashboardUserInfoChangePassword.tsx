import { useEffect, useState } from "react"
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"

import { axios } from "./../../../../../../utils"

interface Inputs {
  password: string
  newPassword: string
  newPasswordRepeat: string
}

export default function DashboardUserInfoChangePassword() {
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<{
    open: boolean
    type: "error" | "success"
    message: string
  }>({ open: false, type: "success", message: "" })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (response.open === true) {
        setResponse({ open: false, type: "success", message: "" })
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [response])

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true)
    const user = localStorage.getItem("user")
    if (user !== null) {
      axios(JSON.parse(user).token)
        .post("/changepassword", data)
        .then(res => {
          setResponse({
            open: true,
            type: "success",
            message: "با موفقیت ثبت شد!",
          })
          console.log(res)
          setLoading(false)
        })
        .catch(err => {
          setResponse({
            open: true,
            type: "success",
            message: "خطایی پیش آمد!",
          })
        })
    }
  }

  return (
    <>
      <Snackbar
        open={response.open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={response.type}>{response.message}</Alert>
      </Snackbar>
      <Box sx={{ mb: "30px" }}>
        <TextField
          label="کلمه عبور فعلی"
          fullWidth
          variant="outlined"
          {...register("password", { required: true })}
          error={errors.password ? true : false}
        />
      </Box>
      <Box sx={{ mb: "30px" }}>
        <TextField
          label="کلمه عبور جدید"
          fullWidth
          variant="outlined"
          {...register("newPassword", { required: true })}
          error={errors.newPassword ? true : false}
        />
      </Box>
      <Box sx={{ mb: "30px" }}>
        <TextField
          label="تکرار کلمه عبور جدید"
          fullWidth
          variant="outlined"
          {...register("newPasswordRepeat", { required: true })}
          error={errors.newPasswordRepeat ? true : false}
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Button
          disabled={loading}
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

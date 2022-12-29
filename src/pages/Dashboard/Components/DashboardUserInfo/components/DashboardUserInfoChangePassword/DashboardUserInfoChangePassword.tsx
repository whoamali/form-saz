import { useEffect, useState } from "react"
import { Box, TextField, Button, CircularProgress } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"

import { axios } from "./../../../../../../utils"

interface Inputs {
  password: string
  newPassword: string
  newPasswordRepeat: string
}

export default function DashboardUserInfoChangePassword() {
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true)
    const user = localStorage.getItem("user")
    if (user !== null) {
      axios(JSON.parse(user).token)
        .post("/changepassword", data)
        .then(res => {
            console.log(res)
          setLoading(false)
        })
    }
  }

  return (
    <>
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

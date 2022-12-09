import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import {
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import { axios } from "./../../../../utils"

interface Inputs {
  username: string
  password: string
  rememberMe: boolean
}

export default function Form() {
  const navigate = useNavigate()
  const [searchParams, _setSearchParams] = useSearchParams()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [postError, setPostError] = useState<
    { message: string; name: string }[] | null
  >()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const res = await axios("").post("/login", data)
      if (res) {
        localStorage.setItem("use", JSON.stringify(res.data.user))
        setPostError(null)
        navigate("/dashboard")
      }
    } catch (err: any) {
      setPostError(
        err.response.data.errors.map(
          (val: { message: string; name: string }) => val,
        ),
      )
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(preShowPassword => !preShowPassword)
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ py: "150px", backgroundColor: "white" }}
    >
      <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "15px" }}>
        <Typography variant="h4" fontSize="26px">
          ورود به حساب کاربری
        </Typography>
      </Box>
      {postError !== null && (
        <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "15px" }}>
          {postError?.map((val: { message: string; name: string }, index) => (
            <Alert severity="error" key={val.name + val.message + index}>
              {val.message}
            </Alert>
          ))}
        </Box>
      )}
      {postError == null && searchParams.get("registered") && (
        <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "15px" }}>
          <Alert severity="success">
            ثبت نام شما با موفقیت انجام شد لطفا وارد شوید!
          </Alert>
        </Box>
      )}
      <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "15px" }}>
        <TextField
          label="نام کاربری یا ایمیل"
          fullWidth
          variant="outlined"
          {...register("username", { required: true })}
          error={errors.username ? true : false}
        />
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "15px" }}>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel error={errors.password ? true : false}>
            کلمه عبور
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            error={errors.password ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="کلمه عبور"
          />
        </FormControl>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "15px" }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...register("rememberMe")} />}
            label="من را به خواطر بسپار"
          />
        </FormGroup>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "10px" }}>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleSubmit(onSubmit)}
          fullWidth
        >
          ورود
        </Button>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "450px" } }}>
        حساب کاربری ندارین؟{" "}
        <Button
          onClick={() => {
            navigate("/singup")
          }}
          sx={{
            backgroundColor: "transparent !important",
            fontSize: "inherit",
            p: 0,
          }}
          color="success"
          disableRipple
        >
          {"ثبت نام کنید!"}
        </Button>
      </Box>
    </Stack>
  )
}

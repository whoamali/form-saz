import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
} from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

interface Inputs {
  username: string
  email: string
  password: string
  passwordRepeat: string
}

export default function Form() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

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
          ثبت نام کاربر جدید
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "15px" }}>
        <TextField
          label="نام کاربری"
          fullWidth
          variant="outlined"
          {...register("username", { required: true })}
          error={errors.username ? true : false}
        />
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "15px" }}>
        <TextField
          label="ایمیل"
          fullWidth
          variant="outlined"
          {...register("email", { required: true })}
          error={errors.email ? true : false}
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
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel error={errors.passwordRepeat ? true : false}>
            تکرار کلمه عبور
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            {...register("passwordRepeat", { required: true })}
            error={errors.passwordRepeat ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="تکرار کلمه عبور"
          />
        </FormControl>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "450px" }, mb: "10px" }}>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleSubmit(onSubmit)}
          fullWidth
        >
          ثبت نام
        </Button>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "450px" } }}>
        حساب کاربری دارین؟{" "}
        <Button
          onClick={() => {
            navigate("/login")
          }}
          sx={{
            backgroundColor: "transparent !important",
            fontSize: "inherit",
            p: 0,
          }}
          color="success"
          disableRipple
        >
          {"وارد شوید!"}
        </Button>
      </Box>
    </Stack>
  )
}

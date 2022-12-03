import { useNavigate } from "react-router-dom"
import { Stack, Typography, Button, Divider, TextField } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"

interface Inputs {
  newsletters: string
}

export default function Body() {
  const navigate = useNavigate()
  const { register, handleSubmit, watch } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  const handleClick = (href: string) => {
    navigate(href)
  }

  return (
    <Stack
      sx={{ flexDirection: { xs: "column", md: "row" }, alignItems: {xs: "center", md: "start"}, mb: "40px" }}
      justifyContent="space-between"
    >
      <Stack sx={{ width: {xs: "90%", md: "30%"} }}>
        <Typography variant="h5" fontSize="23px">
          پشتیبانی
        </Typography>
        <Divider sx={{ mb: "20px" }} />
        <Button
          variant="text"
          sx={{
            justifyContent: "left",
            color: "black",
            fontSize: "17px",
            backgroundColor: "transparent!important",
            transition: "color 250ms",
            ":hover": { color: "#5E2317" },
          }}
          onClick={() => handleClick("#contact_with_us")}
          disableRipple
        >
          تماس باما
        </Button>
        <Button
          variant="text"
          sx={{
            justifyContent: "left",
            color: "black",
            fontSize: "17px",
            backgroundColor: "transparent!important",
            transition: "color 250ms",
            ":hover": { color: "#5E2317" },
          }}
          onClick={() => handleClick("#participation")}
          disableRipple
        >
          مشارکت
        </Button>
      </Stack>
      <Stack sx={{ width: {xs: "90%", md: "30%"} }}>
        <Typography variant="h5" fontSize="23px">
          ساخت فرم
        </Typography>
        <Divider sx={{ mb: "20px" }} />
        <Button
          variant="text"
          sx={{
            justifyContent: "left",
            color: "black",
            fontSize: "17px",
            backgroundColor: "transparent!important",
            transition: "color 250ms",
            ":hover": { color: "#5E2317" },
          }}
          onClick={() => handleClick("#single_page_form")}
          disableRipple
        >
          ساخت فرم تک صفحه ای
        </Button>
        <Button
          variant="text"
          sx={{
            justifyContent: "left",
            color: "black",
            fontSize: "17px",
            backgroundColor: "transparent!important",
            transition: "color 250ms",
            ":hover": { color: "#5E2317" },
          }}
          onClick={() => handleClick("#page_by_page_form")}
          disableRipple
        >
          ساخت فرم صفحه به صفحه
        </Button>
      </Stack>
      <Stack sx={{ width: {xs: "90%", md: "30%"} }}>
        <Typography variant="h5" fontSize="23px">
          خبرنامه
        </Typography>
        <Divider sx={{ mb: "20px" }} />
        <Stack direction="row">
          <TextField
            label="ایمیل"
            variant="outlined"
            color="success"
            sx={{mr: "10px", flex: 1}}
            {...register("newsletters")}
          />
          <Button
            variant="contained"
            color="success"
            disabled={watch("newsletters") ? false : true}
            onClick={handleSubmit(onSubmit)}
          >
            <Typography fontSize="large">{"ارسال"}</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

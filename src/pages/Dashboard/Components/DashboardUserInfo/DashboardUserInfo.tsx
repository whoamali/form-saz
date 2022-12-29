import { useEffect } from "react"
import { Stack, Typography, Box, Paper } from "@mui/material"

import {
  DashboardUserInfoChangeName,
  DashboardUserInfoChangePassword,
} from "./components"

interface IProps {
  title: string
}

export default function DashboardUserInfo({ title }: IProps) {
  //? Eddit page title
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <Stack sx={{ width: "100%", px: "50px", py: "30px", overflowY: "auto" }}>
      <Box sx={{ mb: "60px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: "30px" }}
        >
          <Typography variant="h3" fontSize="28px">
            ویرایش اطلاعات کاربری
          </Typography>
        </Stack>
        <Paper sx={{ py: "50px", px: "150px" }}>
          <DashboardUserInfoChangeName />
        </Paper>
      </Box>
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: "30px" }}
        >
          <Typography variant="h3" fontSize="28px">
            تغییر کلمه عبور
          </Typography>
        </Stack>
        <Paper sx={{ py: "50px", px: "150px" }}>
          <DashboardUserInfoChangePassword />
        </Paper>
      </Box>
    </Stack>
  )
}

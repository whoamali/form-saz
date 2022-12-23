import { Stack, Paper, Divider, Typography } from "@mui/material"

export default function DashboardIndexFormNumberPaper() {
  return (
    <Paper sx={{ width: "300px", height: "fit-content", py: "20px" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Stack alignItems="center" justifyContent="center" width="45%">
          <Typography fontSize="large" sx={{ mb: "15px" }}>
            ساخته شده
          </Typography>
          <Typography fontSize="large">{"15"}</Typography>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack alignItems="center" justifyContent="center" width="45%">
          <Typography fontSize="large" sx={{ mb: "15px" }}>
            فعال
          </Typography>
          <Typography fontSize="large">{"10"}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

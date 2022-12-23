import { Stack, Typography, Button, Paper } from "@mui/material"

export default function EmptyForm() {
  return (
    <Paper>
      <Stack alignItems="center" justifyContent="center" sx={{py: "50px"}}>
        <Typography fontSize="22px" sx={{ pb: "20px" }}>
          شما هیچ فرم ثبت شده ای ندارید!
        </Typography>
        <Button variant="contained" color="success" size="large">
          ساخت فرم
        </Button>
      </Stack>
    </Paper>
  )
}

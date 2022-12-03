import { useNavigate } from "react-router-dom"
import { Stack, Typography, Button, Box } from "@mui/material"

export default function CTACreatForm() {
  const navigate = useNavigate()

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "white", mt: "100px", py: "80px" }}
    >
      <Typography sx={{ fontSize: { xs: "18px", sm: "20px", md: "30px" } }} textAlign="center" mb="40px">
        همین الان فرم دلخواهتون رو رایگان بسازین!
      </Typography>
      <Box textAlign="center">
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={() => {
            navigate("#creat_form")
          }}
        >
          <Typography fontSize="large">{"ساخت فرم"}</Typography>
        </Button>
      </Box>
    </Stack>
  )
}

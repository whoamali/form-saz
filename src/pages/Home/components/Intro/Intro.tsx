import { useNavigate } from "react-router-dom"
import { Box, Button, Typography, Stack } from "@mui/material"

import IntroImage from "./../../../../assets/images/formsaz_intro_image.png"

export default function Intro() {
  const navigate = useNavigate()
  return (
    <Stack
      sx={{
        height: "calc(100vh - 80px)",
        backgroundColor: "#205E47",
        justifyContent: "center",
        mb: {xs: "100px", sm: "150px", md: "200px"},
      }}
    >
      <Typography
        color="white"
        align="center"
        sx={{ fontSize: { xs: "18px", sm: "24px", md: "30px" }, mb: "30px" }}
      >
        فرمساز پلتفرمی{" "}
        <Box
          component="span"
          color="#00ff1b"
          fontSize="inherit"
          display="inline"
        >
          رایگان
        </Box>{" "}
        برای ساخت انواع فرم!
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
      <Box
        component="img"
        sx={{
          width: {
            xs: "90%",
            sm: "70%",
            md: "50%",
            lg: "45%",
            xl: "40%",
            xxl: "25%",
          },
          height: "auto",
          position: "absolute",
          bottom: {
            xs: "-40px",
            sm: "-80px",
            md: "-90px",
            lg: "-110px",
            xl: "-150px",
            xxl: "-250px",
          },
          left: 0,
          right: 0,
          ml: "auto",
          mr: "auto",
        }}
        alt="Intro banner"
        src={IntroImage}
      />
    </Stack>
  )
}

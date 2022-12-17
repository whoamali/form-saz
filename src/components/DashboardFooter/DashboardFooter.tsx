import { Box, Typography } from "@mui/material"
import CopyrightIcon from "@mui/icons-material/Copyright"

export default function DashboardFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        py: "20px",
      }}
    >
      <CopyrightIcon fontSize="small" sx={{ pr: "10px" }} />
      <Typography>
        کلیه حقوق مادی و معنوی این وبسایت متعلق به فرم ساز میباشد!
      </Typography>
    </Box>
  )
}

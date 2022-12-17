import { Box, CircularProgress } from "@mui/material"

export default function Loading() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="success" size="80px" />
    </Box>
  )
}

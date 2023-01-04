import { Skeleton, Box, Stack } from "@mui/material"

export default function DashboardFormSceleton() {
  return (
    <Box>
      <Skeleton height="500px" sx={{ mt: "-100px" }} />
    </Box>
  )
}

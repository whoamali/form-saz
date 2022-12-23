import { Skeleton, Box, Stack } from "@mui/material"

export default function DashboardIndexSceleton() {
  return (
    <Box>
      <Skeleton width="250px" height="70px" />
      <Stack direction="row" justifyContent="space-between">
        <Skeleton width="75%" height="500px" sx={{ mt: "-100px" }} />
        <Skeleton width="20%" height="200px" sx={{ mt: "-35px" }} />
      </Stack>
    </Box>
  )
}

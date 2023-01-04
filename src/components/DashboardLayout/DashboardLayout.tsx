import { Stack, Box, Typography } from "@mui/material"

interface IProps {
  headerText: string
  headerElement?: JSX.Element
  children: JSX.Element | string
}

export default function DashboardLayout({
  headerText,
  headerElement,
  children,
}: IProps) {
  return (
    <Stack sx={{ width: "100%", px: "50px", py: "30px", overflowY: "auto" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{mb: "30px"}}>
        <Typography variant="h3" fontSize="28px">
          {headerText}
        </Typography>
        {headerElement}
      </Stack>
      <Box>{children}</Box>
    </Stack>
  )
}

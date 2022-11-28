import { Typography, Stack } from "@mui/material"

interface IProps {
  size: string
}

export default function Logo({ size }: IProps) {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Typography color="#5E2317" fontSize={size}>
        فرمــ
      </Typography>
      <Typography color="#100712" fontSize={size}>
        ساز
      </Typography>
    </Stack>
  )
}

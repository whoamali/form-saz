import { useEffect } from "react"
import { Box } from "@mui/material"

interface IProps {
  title: string
}

export default function DashboardIndex({ title }: IProps) {
  //? Eddit page title
  useEffect(() => {
    document.title = title
  }, [])
  return <Box sx={{ flex: 1 }}>DashboardIndex</Box>
}

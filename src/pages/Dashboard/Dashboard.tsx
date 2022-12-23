import { useCallback } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import {
  DashboardHeader,
  DashboardDrawer,
  DashboardFooter,
} from "./../../components"

export default function Dashboard() {
  const { pathname } = useLocation()

  const handleActiveRoute = useCallback(
    (pathname: string): "dashboard" | "forms" | "user-info" => {
      const pathnameArray = pathname.split("/")
      if (pathnameArray.length == 2) {
        return "dashboard"
      } else if (pathnameArray[2] == "forms") {
        return "forms"
      }
      return "user-info"
    },
    [pathname],
  )

  return (
    <Box>
      <DashboardHeader />
      <Stack direction="row" sx={{ height: "calc(100vh - 64px);" }}>
        <DashboardDrawer activeRoute={handleActiveRoute(pathname)} />
        <Outlet />
      </Stack>
      <DashboardFooter />
    </Box>
  )
}

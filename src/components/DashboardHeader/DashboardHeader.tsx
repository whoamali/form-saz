import { useState, MouseEvent, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  MenuItem,
  Tooltip,
  Avatar,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  Stack,
  AppBar,
  Divider,
  ListItemIcon,
} from "@mui/material"
import Logout from "@mui/icons-material/Logout"
import EditIcon from "@mui/icons-material/Edit"

import { Logo } from "./../" //! /root/src/components
import { useAuth } from "./../../hooks"

function ResponsiveAppBar() {
  const [data] = useAuth()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (data.expired) {
      navigate("/login")
    }
  }, [data])

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = (path: string | null) => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <Stack direction="row" alignItems="center">
            <Logo size="26px" />
            <Typography
              color="black"
              fontSize="16px"
              sx={{ display: { xs: "none", sm: "block" }, ml: "25px" }}
            >
              ساخت فرم رایگان با چند کلیک!
            </Typography>
          </Stack>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="تنظیمات حساب">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                disableRipple
              >
                <Avatar alt="Avatar" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              sx={{ mt: "45px" }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu(null)}
            >
              <MenuItem
                sx={{
                  ":hover": {
                    backgroundColor: "transparent",
                    cursor: "default",
                  },
                }}
                disableRipple
              >
                <Typography textAlign="center">{data.username}</Typography>
              </MenuItem>
              <Divider />
              <MenuItem
                sx={{ width: "200px" }}
                onClick={() => handleCloseUserMenu("edit")}
              >
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">ویرایش</Typography>
              </MenuItem>
              <MenuItem
                sx={{ width: "200px" }}
                onClick={() => handleCloseUserMenu("logout")}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">خروج</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar

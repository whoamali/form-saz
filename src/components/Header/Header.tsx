import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Box,
  AppBar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Stack,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import { Logo } from "./../Logo"

interface IProps {
  window?: () => Window
}

const drawerWidth = 240

export default function Header({ window }: IProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo size="28px" />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => {
              navigate("/")
            }}
          >
            <ListItemText primary={"خانه"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => {
              navigate("#creat_form")
            }}
          >
            <ListItemText primary={"ساخت فرم"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => {
              navigate("#tell_us")
            }}
          >
            <ListItemText primary={"تماس با ما"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              backgroundColor: "#388e3c",
              color: "white",
              ":hover": { backgroundColor: "#1b5e20" },
            }}
            onClick={() => {
              navigate("#admin_panel")
            }}
          >
            <ListItemText primary={"ناحیه کاربری"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: "flex", height: "80px" }}>
      <AppBar
        component="nav"
        sx={{ height: "80px", backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: "space-between", sm: "flex-start" },
            height: "100%",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              width: { sm: "100%" },
              mx: { xs: 0, sm: "10px", md: "50px", lg: "100px" },
            }}
          >
            <Stack direction="row" alignItems="center">
              <Box component="div">
                <Logo size="28px" />
              </Box>
              <Stack
                sx={{ display: { xs: "none", sm: "flex" }, ml: {sm: "50px"} }}
                direction="row"
              >
                <Button
                  onClick={() => {
                    navigate("/")
                  }}
                  sx={{
                    mr: { sm: "8px", md: "25px" },
                    color: "#5E2317",
                    backgroundColor: "transparent !important",
                    fontSize: {xs: "16px", sm: "18px", md: "20px"}
                  }}
                  disableRipple
                >
                  {"خانه"}
                </Button>
                <Button
                  onClick={() => {
                    navigate("#create_form")
                  }}
                  sx={{
                    mr: { sm: "8px", md: "20px" },
                    color: "#5E2317",
                    backgroundColor: "transparent !important",
                    fontSize: {xs: "16px", sm: "18px", md: "20px"}
                  }}
                  disableRipple
                >
                  {"ساخت فرم"}
                </Button>
                <Button
                  onClick={() => {
                    navigate("#tell_us")
                  }}
                  sx={{
                    mr: { sm: "8px", md: "20px" },
                    color: "#5E2317",
                    backgroundColor: "transparent !important",
                    fontSize: {xs: "16px", sm: "18px", md: "20px"}
                  }}
                  disableRipple
                >
                  {"تماس با ما"}
                </Button>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              color="success"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => {
                navigate("#admin_panel")
              }}
            >
              {"ناحیه کاربری"}
            </Button>
          </Stack>

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "#942818" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

import { Stack, Link, Divider } from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import TelegramIcon from "@mui/icons-material/Telegram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import GitHubIcon from "@mui/icons-material/GitHub"

import { Logo } from "./../../../../components"

export default function Head() {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Logo size="27px" />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          width="150px"
        >
          <Link
            href="#"
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 250ms",
              ":hover": {
                color: "#5E2317",
              },
            }}
          >
            <InstagramIcon fontSize="medium" />
          </Link>
          <Link
            href="#"
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 250ms",
              ":hover": {
                color: "#5E2317",
              },
            }}
          >
            <TelegramIcon fontSize="medium" />
          </Link>
          <Link
            href="#"
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 250ms",
              ":hover": {
                color: "#5E2317",
              },
            }}
          >
            <WhatsAppIcon fontSize="medium" />
          </Link>
          <Link
            href="#"
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 250ms",
              ":hover": {
                color: "#5E2317",
              },
            }}
          >
            <GitHubIcon fontSize="medium" />
          </Link>
        </Stack>
      </Stack>
      <Divider sx={{mb: "40px"}} />
    </>
  )
}

import { useNavigate } from "react-router-dom"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import DashboardIcon from "@mui/icons-material/Dashboard"
import SegmentIcon from "@mui/icons-material/Segment"
import PersonIcon from "@mui/icons-material/Person"

interface IProps {
  activeRoute: "dashboard" | "forms" | "user-info"
}

interface Form {
  name: string
  description: string
  type: "single-page" | "page-by-page"
  backPrevQuestion: boolean
  start: Date
  expired: Date | null
  randomQuestion: boolean
  question: {
    title: string
    description: string | null
    type:
      | "multiple-choice"
      | "descriptive"
      | "short-answer"
      | "true-false"
      | "file"
    fileType: "pdf" | "word" | "image" | "excel" | "powerpoint" | null
    mandatory: boolean
    answer:
      | {
          title: string | null
          correct: boolean | null
          filePath: string | null
        }[]
      | null
  }[]
}

export default function DashboardDrawer({ activeRoute }: IProps) {
  const navigate = useNavigate()

  const handleClick = (path: "/dashboard" | "forms" | "user-info"): void => {
    navigate(path)
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "200px",
      }}
    >
      <List>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            selected={activeRoute === "dashboard"}
            onClick={() => {
              handleClick("/dashboard")
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto", pr: "10px" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>داشبورد</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            selected={activeRoute === "forms"}
            onClick={() => {
              handleClick("forms")
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto", pr: "10px" }}>
              <SegmentIcon />
            </ListItemIcon>
            <ListItemText>فرم ها</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            selected={activeRoute === "user-info"}
            onClick={() => {
              handleClick("user-info")
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto", pr: "10px" }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>اطلاعات کاربری</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

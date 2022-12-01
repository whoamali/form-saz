import { Stack, Typography } from "@mui/material"

import { Logo } from "../../../../components"
import { ServicesItem } from "./components"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import AssessmentIcon from "@mui/icons-material/Assessment"
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import ShareIcon from "@mui/icons-material/Share"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

export default function Services() {
  return (
    <Stack>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: "20px",
        }}
        fontSize="33px"
      >
        خدمات <Logo size="inherit" />
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-around"
      >
        <ServicesItem
          title="ساخت انواع فرم"
          Icon={<FormatListBulletedIcon fontSize="large" />}
        />
        <ServicesItem
          title="گزارشگیری متنوع"
          Icon={<AssessmentIcon fontSize="large" />}
        />
        <ServicesItem
          title="کنترل کاربران"
          Icon={<SupervisedUserCircleIcon fontSize="large" />}
        />
        <ServicesItem
          title="محدودسازی زمان"
          Icon={<AccessTimeIcon fontSize="large" />}
        />
        <ServicesItem
          title="سوالات شرطی"
          Icon={<QuestionMarkIcon fontSize="large" />}
        />
        <ServicesItem
          title="اشتراک گذاری"
          Icon={<ShareIcon fontSize="large" />}
        />
        <ServicesItem
          title="ادمین پنل اختصاصی"
          Icon={<AdminPanelSettingsIcon fontSize="large" />}
        />
        <ServicesItem
          title="و بسیاری خدمات دیگر"
          Icon={<MoreHorizIcon fontSize="large" />}
        />
      </Stack>
    </Stack>
  )
}

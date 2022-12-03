import { Box, Typography, Divider } from "@mui/material"

export default function Aboute() {
  return (
    <Box>
      <Typography variant="h5" fontSize="23px">
        درباره فرمساز
      </Typography>
      <Divider sx={{ mb: "20px" }} />
      <Typography sx={{ textAlign: "justify" }}>
        فرمساز پلتفرمی کاملا رایگان ، ساده ، قدرتمند و سریع برای ساخت انواع فرم
        با قابلیت طراحی انواع سوال است که ابتدا ایده آن در سال 1401 در دانشگاه
        فنی و حرفه ای شماره 2 تبریز بیان شد و توسط گروهی از دانشجویان طراحی و
        برنامه نویسی شد! پروژه فرمساز کاملا اپن سورس هستش و شما میتونین برای
        مشارکت در پروژه کامیت های خودتون رو از گیتهاب برامون ارسال کنین!
      </Typography>
    </Box>
  )
}

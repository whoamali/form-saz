import { Stack } from "@mui/material"

interface IProps {
  title: string
  Icon: JSX.Element
}

export default function ServicesItem({ title, Icon }: IProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      fontSize="21px"
      textAlign="center"
      
      sx={{
        width: { xs: "220px", md: "250px" },
        height: "120px",
        border: ".5px solid #230e09",
        color: "#230e09",
        borderRadius: "5px",
        mx: { xs: "20px", md: "30px" },
        my: "20px",
        backgroundColor: "white",
        transition: "all 250ms",
        ":hover": {
            color: "white",
            backgroundColor: "#230e09",
        }
      }}
    >
      {Icon}
      {title}
    </Stack>
  )
}

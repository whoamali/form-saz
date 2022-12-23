import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ButtonGroup,
  Button,
  Badge,
  Tooltip,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"

interface IProps {
  forms:
    | {
        id: string
        name: string
        active: boolean
        data: string
      }[]
    | undefined
}

const FETCHED_DATA_SERVER = [
  {
    id: "form_1",
    name: "فرم یک",
    active: true,
    data: "1401/05/02",
  },
  {
    id: "form_2",
    name: "فرم دو",
    active: false,
    data: "1401/12/01",
  },
  {
    id: "form_3",
    name: "فرم سه",
    active: false,
    data: "1401/01/05",
  },
  {
    id: "form_4",
    name: "فرم چهار",
    active: true,
    data: "1401/10/09",
  },
]

export default function DashboardIndexTable({ forms }: IProps) {
  return (
    <TableContainer component={Paper} sx={{ mr: "50px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" sx={{ fontSize: "large" }}>
              نام فرم
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "large" }}>
              وضعیت
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "large" }}>
              تاریخ ساخت
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "large" }}>
              عملیات
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forms &&
            forms.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <Badge
                    badgeContent={row.active ? "فعال" : "غیرفعال"}
                    color={row.active ? "success" : "error"}
                  />
                </TableCell>
                <TableCell align="center">{row.data}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    variant="text"
                    aria-label="text button group"
                    color="inherit"
                  >
                    <Button color="primary" disableRipple>
                      <Tooltip title="نتیجه" placement="top">
                        <VisibilityIcon color="primary" />
                      </Tooltip>
                    </Button>
                    <Button color="secondary" disableRipple>
                      <Tooltip title="ویرایش" placement="top">
                        <EditIcon color="action" />
                      </Tooltip>
                    </Button>
                    <Button color="error">
                      <Tooltip title="حذف" placement="top">
                        <DeleteIcon color="error" />
                      </Tooltip>
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

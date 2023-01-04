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

export default function DashboardFormsTable({ forms }: IProps) {
  return (
    <TableContainer component={Paper} sx={{ mr: "50px", maxHeight: 490 }}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
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

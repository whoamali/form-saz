import { Dispatch, SetStateAction, ChangeEvent } from "react"
import {
  Stack,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

interface IProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export default function DashboardFormsHeaderElement({
  search,
  setSearch,
}: IProps) {
  return (
    <Stack direction="row" alignItems="center">
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="outlined"
        style={{ marginLeft: "20px", height: "42px" }}
        size="small"
      >
        <InputLabel htmlFor="searchInput">جستجو</InputLabel>
        <OutlinedInput
          id="searchInput"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          label="جستجو"
          value={search}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </FormControl>
      <Button variant="contained" color="success" size="large">
        ایجاد فرم
      </Button>
    </Stack>
  )
}

import { useEffect, useState } from "react"
import { Stack } from "@mui/material"

import { DashboardLayout } from "./../../../../components"
import { EmptyForm } from "./../" //! Components
import {
  DashboardIndexSceleton,
  DashboardIndexTable,
  DashboardIndexFormNumberPaper,
} from "./components"
import { axios } from "./../../../../utils"

interface IProps {
  title: string
}

interface Forms {
  forms: {
    id: string
    name: string
    active: boolean
    data: string
  }[]
}

export default function DashboardIndex({ title }: IProps) {
  const [loading, setLoadin] = useState<boolean>(true)
  const [forms, setForms] = useState<Forms["forms"]>()

  //? Eddit page title
  useEffect(() => {
    document.title = title
  }, [])

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user !== null) {
      axios(JSON.parse(user).token)
        .get("/form?path=%2Fdashboard")
        .then(res => {
          if (res.data.form) {
            setForms(res.data.form)
          }
          setLoadin(false)
        })
    }
  }, [])

  return (
    <DashboardLayout headerText="داشبورد">
      {loading ? (
        <DashboardIndexSceleton />
      ) : forms ? (
        <Stack direction="row">
          <DashboardIndexTable forms={forms} />
          <DashboardIndexFormNumberPaper />
        </Stack>
      ) : (
        <EmptyForm />
      )}
    </DashboardLayout>
  )
}

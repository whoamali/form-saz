import { useEffect, useState } from "react"

import { DashboardLayout } from "./../../../../components"
import {
  DashboardFormsTable,
  DashboardFormSceleton,
  DashboardFormsHeaderElement,
} from "./components"
import { axios } from "./../../../../utils"
import { EmptyForm } from "./../" //! Components

interface IProps {
  title: string
}

interface Forms {
  forms:
    | {
        id: string
        name: string
        active: boolean
        data: string
      }[]
    | undefined
}

const FETCHED_DATA_SERVER: Forms["forms"] = [
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
  {
    id: "form_5",
    name: "فرم پنج",
    active: true,
    data: "1401/10/09",
  },
  {
    id: "form_6",
    name: "فرم شش",
    active: true,
    data: "1401/10/09",
  },
  {
    id: "form_7",
    name: "فرم هفت",
    active: true,
    data: "1401/10/09",
  },
  {
    id: "form_8",
    name: "فرم هشت",
    active: true,
    data: "1401/10/09",
  },
  {
    id: "form_9",
    name: "فرم نه",
    active: true,
    data: "1401/10/09",
  },
  {
    id: "form_10",
    name: "فرم ده",
    active: true,
    data: "1401/10/09",
  },
]

export default function DashboardForms({ title }: IProps) {
  const [loading, setLoadin] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")
  const [filteredList, setFilteredList] =
    useState<Forms["forms"]>(FETCHED_DATA_SERVER)
  const [forms, setForms] = useState<Forms["forms"]>()

  //? Eddit page title
  useEffect(() => {
    document.title = title
  }, [])

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user !== null) {
      axios(JSON.parse(user).token)
        .get("/form")
        .then(res => {
          if (res.data.form) {
            setForms(res.data.form)
          }
          setLoadin(false)
        })
    }
  }, [])

  useEffect(() => {
    setFilteredList(() => {
      let newList: Forms["forms"] = FETCHED_DATA_SERVER
      newList = FETCHED_DATA_SERVER?.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      )
      return newList
    })
  }, [search])

  return (
    <DashboardLayout
      headerText="فرم ها"
      headerElement={
        forms ? (
          <DashboardFormsHeaderElement search={search} setSearch={setSearch} />
        ) : undefined
      }
    >
      {loading ? (
        <DashboardFormSceleton />
      ) : forms ? (
        <DashboardFormsTable forms={filteredList} />
      ) : (
        <EmptyForm />
      )}
    </DashboardLayout>
  )
}

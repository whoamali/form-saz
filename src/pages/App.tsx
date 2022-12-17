import { Routes, Route } from "react-router-dom"

import { Home } from "./Home"
import { Login } from "./Login"
import { Logout } from "./Logout"
import { Singup } from "./Singup"
import { Dashboard, DashboardIndex } from "./Dashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home title="فرم ساز | خانه" />} />
      <Route path="/login" element={<Login title="فرم ساز | ورود" />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/singup" element={<Singup title="فرم ساز | ثبت نام" />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardIndex title="فرم ساز | داشبورد" />} />
      </Route>
    </Routes>
  )
}

export default App

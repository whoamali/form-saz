import { Routes, Route } from "react-router-dom"

import { Home } from "./Home"
import { Login } from "./Login"
import { Singup } from "./Singup"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home title="فرم ساز | خانه" />} />
      <Route path="/login" element={<Login title="فرم ساز | ورود" />} />
      <Route path="/singup" element={<Singup title="فرم ساز | ثبت نام" />} />
    </Routes>
  )
}

export default App

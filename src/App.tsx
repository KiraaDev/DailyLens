import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import LatestNews from "./pages/LatestNews"
import NotFound from "./pages/NotFound"
import AppLayout from "./components/layout/AppLayout"

function App() {

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news/latest" element={<LatestNews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

import { Outlet } from "react-router"
import NavBar from "../NavBar"


function AppLayout() {
  return (
    <div className='min-h-svh bg-[#f9f4ed] text-[#2a2a2a]'>
      <NavBar />
      <div className=" flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout

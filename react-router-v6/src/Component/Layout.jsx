import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"


const Layout = () => {

  // const navList = ['About', 'Stack', 'Contact']
  return (
    <div className='container'>
        {/* <Navbar navList={navList}/> */}
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout
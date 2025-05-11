import NavBar from "./navbar"
import BG from "./background"
import { Outlet } from "react-router-dom"
import { ScrollToTop } from "./utils"


const Layout = () => {
  ScrollToTop()
  return (
    <>
      <BG />
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout

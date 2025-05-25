import NavBar from "./navbar"
import BG from "./background"
import { Outlet } from "react-router-dom"
import { ScrollToTop } from "./utils"


const Layout = () => {
  ScrollToTop()
  return (
    <>
      <BG />
      <div className="scroll-indicator"></div>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout

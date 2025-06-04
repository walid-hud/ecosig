import NavBar from "./navbar"
import BG from "./background"
import { Outlet } from "react-router-dom"
import { ScrollToTop } from "./utils"
import { ToastContainer } from "react-toastify"


const Layout = () => {
  ScrollToTop()
  return (
    <>
      <BG />
      <div className="scroll-indicator"></div>
      <NavBar />
      <Outlet />
      <ToastContainer
      position="top-center"
      autoClose={2000}
      pauseOnHover={true}
      closeOnClick
      theme="dark"
      draggable
      style={{width:"100vw", marginTop:"clamp(2rem, 60px, 3rem)"}}
      >
      </ToastContainer>
    </>
  );
}

export default Layout

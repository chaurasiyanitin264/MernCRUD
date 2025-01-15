
import Header from "./component/Header";
// import TopMenu from "./component/TopMenu";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import SideBar from "./component/SideBar";

const Layout = () => {
  return (
    <>
  <div >
       <div style={{backgroundColor:" #0078D7"}}>
      
         <Header />
         <hr />
       </div>
      {/* <TopMenu /> */}
      <div style={{ display: "flex", minHeight: "100vh" }} >
        <SideBar />
      
          <Outlet />
     
      </div>
      <Footer />
  </div>
    </>
  );
};

export default Layout;



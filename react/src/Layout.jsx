import Header from "./component/Header";
import TopMenu from "./component/TopMenu";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Header />
            <TopMenu />
            <hr />
            <div id="container">
                <Outlet />
            </div>
            <hr />
            <Footer />
        </>
    )
}
export default Layout;
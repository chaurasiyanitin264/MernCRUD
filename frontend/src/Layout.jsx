import {Link, Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Link to="/">Home</Link> |
            <Link to="insert">Insert</Link> |
            <Link to="display">Display</Link>
            <hr />
            <Outlet/>
            <hr />
            
        </>
    )
}
export default Layout;


// const Layout = ({ children }) => {
//     return 
//     <>
//     <p>hello</p>

import { Outlet } from "react-router"
import DashboardSidebar from "./Sidebar"

//     </>
// }

// export default Layout



export const Layout = () => {

    return (
        <>
            <DashboardSidebar />
            <Outlet />

        </>
    )
}


import { Outlet } from "react-router"
import DashboardSidebar from "./Sidebar"

export const Layout = () => {

    return (
        <>
            <DashboardSidebar />
            <Outlet />

        </>
    )
}


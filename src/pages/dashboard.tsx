import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

interface DashboardProps { }

function Dashboard({ }: DashboardProps) {
    return (
        <div className="w-screen h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex">
            <div className="w-[350px] border flex flex-col">
                <Sidebar />
            </div>
            <div className="flex-grow flex flex-col">
                {/* Implement display for users commit */}
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;
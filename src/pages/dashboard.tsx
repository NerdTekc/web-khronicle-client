import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

interface DashboardProps { }

function Dashboard({ }: DashboardProps) {
    return (
        <div className="w-screen h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex">
            <div className="w-[350px] border-r-[1px] dark:border-slate-500 flex flex-col">
                <Sidebar />
            </div>
            <div className="flex-grow flex flex-col">
                {/* Implement display for users commit */}
                <Header />
                <div className="flex-grow overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
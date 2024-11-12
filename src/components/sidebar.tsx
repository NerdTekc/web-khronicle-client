import { NavLink } from "react-router-dom";
import { Logo } from "./navbar";
import { RiDashboardHorizontalLine, RiGitCommitLine } from "react-icons/ri";

interface SidebarProps { }

function Sidebar() {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      <Logo className="px-2" />
      <ul className="flex-grow flex flex-col gap-1 my-5">
        {/* Navigation links */}
        <li className="cursor-pointer">
          <NavLink to="/u/dashboard" className={({ isActive }) =>
            isActive
              ? "flex rounded-md p-2 bg-slate-100 items-center"
              : "flex rounded-md p-2 hover:bg-slate-100 items-center"}>
            <span className="w-[40px]">
              <RiDashboardHorizontalLine size={24} />
            </span>
            <span className="text-xl">Dashboard</span>
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/u/commits" className={({ isActive }) =>
            isActive
              ? "flex rounded-md p-2 bg-slate-100 items-center"
              : "flex rounded-md p-2 hover:bg-slate-100 items-center"}>
            <span className="w-[40px]">
              <RiGitCommitLine size={24} />
            </span>
            <span className="text-xl">Commits</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}


export default Sidebar;

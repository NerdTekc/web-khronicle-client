import { NavbarList } from "./navbar";

interface HeaderProps { }

function Header() {
    return (
        <div className="p-4 w-full border-b-[1px] border-slate-100 dark:border-slate-500 flex items-center justify-between">
            {/* searc bar */}
            <input type="text" className="px-4 py-2 rounded-md dark:bg-slate-600 focus:outline-none" placeholder="Search for commits..." />
            <div className="flex items-center justify-center">
                <NavbarList />
            </div>
        </div>
    )
}

export default Header;
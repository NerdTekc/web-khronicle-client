import { AiFillAndroid, AiFillGithub } from "react-icons/ai";
import DarkMode from "./darkmode";

interface NavbarProps { }

function Navbar({ }: NavbarProps) {
    return (
        <div className="p-4 backdrop-blur-md z-10 rounded-xl my-4 shadow-sm dark:shadow-[0_0_9px_0_rgba(255,255,255,0.6)]">
            <div className="w-full flex justify-between items-center">
                <h1 className="font-bold text-xl flex items-center gap-2">
                    <AiFillAndroid className="w-6 h-6" /> Web Khronicle
                </h1>
                <ul className="flex items-center justify-center gap-4">
                    <li className="flex items-center justify-center">
                        <DarkMode />
                    </li>
                    <li className="flex items-center justify-center">
                        <AiFillGithub size={24} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

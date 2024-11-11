import { AiFillAndroid, AiFillGithub } from "react-icons/ai";
import DarkMode from "./darkmode";

interface NavbarProps {

}

function Navbar({ }: NavbarProps) {
    return (
        <div className="p-4 bg-transparent backdrop-blur-2xl rounded-xl my-2 shadow-sm">
            <div className="w-full flex justify-between items-center">
                <h1 className="font-bold text-xl flex items-center gap-2">
                    <AiFillAndroid className="w-6 h-6" /> WebK
                </h1>
                <ul className="flex items-center gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <DarkMode />
                    </li>
                    <li>
                        <AiFillGithub className="w-6 h-6" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

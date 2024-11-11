import { AiFillGithub } from "react-icons/ai"
import Navbar from "./navbar"
import { useAuth } from "../context/auth-context";

function Landing() {
    const { user, loginWithGithub, logout } = useAuth();
    return (
        <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white w-screen h-screen">
            <div className="w-full h-full container mx-auto flex flex-col">
                <Navbar />
                <div className="flex flex-grow justify-center flex-col gap-5 items-center">
                    <h1 className="text-8xl font-bold">Web Khronicle</h1>
                    <p className="text-center text-md">A modern, responsive, and user-friendly web  application for tracking and organizing your daily tasks.</p>
                    <div className="flex justify-center items-center gap-4">
                        {!user ? (
                            <button onClick={loginWithGithub} className="flex mt-4 gap-3 bg-slate-900 dark:bg-white py-2 px-4 rounded-full text-white dark:text-slate-900 font-bold">
                                Connect with Github <AiFillGithub size={24} />
                            </button>
                        ) : (
                            <div>
                                <h3>Welcome, {user.name}</h3>
                                <img src={user.avatar_url} alt="User Avatar" style={{ width: 50, height: 50 }} />
                                <p>{user.bio}</p>
                                <button onClick={logout}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
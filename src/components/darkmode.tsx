import { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import localStorageUtil, { StorageKeys } from "../../lib/local-storage";

function DarkMode() {
    const [dark, setDark] = useState<boolean>(false);

    // Load theme preference from local storage on component mount
    useEffect(() => {
        const savedTheme = localStorageUtil.getItem<boolean>(StorageKeys.WK_DARK_MODE);
        if (savedTheme) {
            setDark(savedTheme);
            document.body.classList.add("dark");
        }
    }, []);

    const darkModeHandler = () => {
        setDark((prevDark) => {
            const newDark = !prevDark;
            localStorageUtil.setItem(StorageKeys.WK_DARK_MODE, newDark);
            document.body.classList.toggle("dark", newDark);
            return newDark;
        });
    };

    return (
        <div className="flex items-center justify-center border rounded-xl">
            <button onClick={darkModeHandler}>
                {dark ? <IoSunny /> : <IoMoon />}
            </button>
        </div>
    );
}

export default DarkMode;

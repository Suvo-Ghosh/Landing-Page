import React from "react";
import Theme from "./Theme";

function Navbar({ setIsLoginOpen, setIsRegisterOpen }) {
    return (
        <div className="sticky top-0  z-10 w-full bg-gray-200 dark:bg-gray-900 shadow-md dark:shadow-lg transition-colors duration-300">
            <div className=" flex justify-between px-6 mx-auto w-full py-3 ">
                <h1 className="text-gray-900 dark:text-white font-bold text-xl">StudyBuddy</h1>
                <div className="buttons flex gap-3">
                    <Theme />
                    <button
                        className="px-4 py-1 cursor-pointer bg-blue-500 dark:bg-blue-700 text-white font-medium rounded shadow"
                        onClick={() => setIsLoginOpen(true)}
                    >
                        Login
                    </button>
                    <button
                        className="px-3 py-1 cursor-pointer bg-green-500 dark:bg-green-700 text-white font-medium rounded shadow"
                        onClick={() => setIsRegisterOpen(true)}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

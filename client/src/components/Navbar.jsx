import React from "react";
import Theme from "./Theme";

function Navbar({ setIsLoginOpen, setIsRegisterOpen, loggedIn, user }) {
    return (
        <div className="sticky top-0 z-10 w-full bg-gray-200 dark:bg-gray-900 shadow-md dark:shadow-lg transition-colors duration-300">
            <div className=" flex justify-between px-4 md:px-6 mx-auto w-full py-3 ">
                <div className="flex items-center justify-center">
                    <img src="/logo3.svg" alt="logo" loading="lazy" className="hidden sm:flex" width={50} height={30} />
                    <h1 className="text-gray-900 dark:text-white font-bold text-xl">Learnity</h1>
                </div>
                <div className="buttons flex items-center gap-3">
                    <Theme />
                    {loggedIn
                        ? <p className="dark:text-white font-semibold">Hi, {user}</p>
                        : <>
                            <button
                                className="px-4 py-1 cursor-pointer bg-blue-500 dark:bg-blue-700 text-white font-medium rounded shadow-md"
                                onClick={() => setIsLoginOpen(true)}
                            >
                                Login
                            </button>
                            <button
                                className="px-3 py-1 cursor-pointer bg-green-500 dark:bg-green-700 text-white font-medium rounded shadow-md"
                                onClick={() => setIsRegisterOpen(true)}
                            >
                                Register
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;

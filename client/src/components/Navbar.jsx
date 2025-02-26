import React from "react";
import Theme from "./Theme";

function Navbar() {
    return (
        <div className="sticky top-0 w-full bg-gray-200 dark:bg-gray-900 shadow-md dark:shadow-lg">
            <div className=" flex justify-between px-4 mx-auto w-full max-w-[900px] py-3 ">
                <h1 className="text-gray-900 dark:text-white font-bold text-xl">StudyBuddy</h1>
                <div className="buttons flex gap-3">
                    <Theme />
                    <button className="px-4 py-1 cursor-pointer bg-blue-500 dark:bg-blue-700 text-white font-medium rounded shadow">
                        Login
                    </button>
                    <button className="px-3 py-1 cursor-pointer bg-green-500 dark:bg-green-700 text-white font-medium rounded shadow">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

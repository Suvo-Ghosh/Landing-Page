import React from "react";

function Register({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 px-10 flex items-center justify-center bg-black/50">
            <div className="bg-white relative dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Create an Account
                </h2>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">
                            Name:
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">
                            Password:
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition"
                    >
                        Register
                    </button>
                    <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                        Already have an account?{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Login
                        </a>
                    </p>
                </form>
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-3 right-4 text-xl text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

export default Register;

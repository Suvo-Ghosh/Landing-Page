import React, { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";

function Login({ isOpen, setLoggedIn, setIsLoginOpen, setUser }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({ email: "", password: "" })
    const [error, setError] = useState({})
    const [success, setSuccess] = useState()

    const handleForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        let err = {}

        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(formData.email)) {
            err.email = "Invalid email"
        }

        if (formData.password.length < 6) {
            err.password = "Password must be 6 char"
        }

        if (Object.keys(err).length > 0) {
            setError(err)
            return
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, formData);
            setSuccess(response.data.message);
            setUser(response.data.user)
            setFormData({ email: "", password: "" });
            toast.success("Login successful")
            setLoggedIn(true)
            setIsLoginOpen(false)

        } catch (err) {
            console.log(err);
            setError({ server: err.response?.data?.error || "Something went wrong" });
        }
    }

    return (
        <div className="fixed inset-0 px-10 flex items-center justify-center bg-black/50">
            <div className="bg-white relative bg- dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md animate-fadeIn transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Login to Your Account
                </h2>
                {success && <p className="text-green-600 text-center">{success}</p>}
                {error.server && <p className="text-red-600 text-center">{error.server}</p>}
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleForm}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your email"
                        />
                    </div>
                    {error.email && <p className="text-red-600"> {error.email}</p>}
                    <div className="mb-2">
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleForm}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your password"
                        />
                    </div>
                    {error.password && <p className="text-red-600"> {error.password}</p>}
                    <button
                        type="submit"
                        onClick={formSubmit}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition"
                    >
                        Login
                    </button>
                    <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                        Don't have an account?{" "}
                        <a href="" className="text-blue-500 hover:underline">
                            Register
                        </a>
                    </p>
                </form>
                <button
                    onClick={() => setIsLoginOpen(false)}
                    className="absolute cursor-pointer top-3 right-4 text-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

export default Login;

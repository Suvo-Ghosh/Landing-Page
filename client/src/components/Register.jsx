import React, { useState } from "react";
import axios from 'axios'


function Register({ isOpen, setIsRegisterOpen, setIsLoginOpen }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState({})
    const [success, setSuccess] = useState()

    const handleForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        let err = {}
        if (formData.name.trim().length <= 2) {
            err.name = "Invalid name"
        }

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
            const response = await axios.post("http://localhost:4000/user/register", formData);
            setSuccess(response.data.message);
            setFormData({ name: "", email: "", password: "" });
            setIsRegisterOpen(false)
            setIsLoginOpen(true)
        } catch (err) {
            console.log(err);
            setError({ server: err.response?.data?.error || "Something went wrong" });
        }
    }

    return (
        <div className="fixed inset-0 px-10 flex items-center justify-center bg-black/50">
            <div className="bg-white relative dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md animate-fadeIn transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Create an Account
                </h2>
                {error.server && <p className="text-red-600 text-center">{error.server}</p>}
                {success && <p className="text-green-600 text-center">{success}</p>}
                <form className="mt-4">
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleForm}
                            id="name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your full name"
                        />
                    </div>
                    {error.name && <p className="text-red-600">{error.name}</p>}
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleForm}
                            id="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your email"
                        />
                    </div>
                    {error.email && <p className="text-red-600"> {error.email}</p>}
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-1">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleForm}
                            id="password"
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
                    onClick={() => setIsRegisterOpen(false)}
                    className="absolute cursor-pointer top-3 right-4 text-xl text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

export default Register;

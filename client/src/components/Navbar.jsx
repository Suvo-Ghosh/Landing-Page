import React from 'react'

function Navbar() {
    return (
        <div className="outer-div bg-green-500 w-full">
            <div className="bg-red-500 flex justify-between px-4 mx-auto w-full max-w-[900px]">
                <h1 className='logo'>StudyBuddy</h1>
                <div className="buttons space-x-2">
                    <button className='px-4 py-1 cursor-pointer bg-blue-400 rounded'>Login</button>
                    <button className='px-2 py-1 cursor-pointer bg-blue-400 rounded'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
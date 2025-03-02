import React, { useEffect, useState } from 'react'

function Theme() {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])
    return (
        <div className='cursor-pointer'>
            {theme === "dark"
                ? <div className="text-xl" onClick={() => setTheme("light")}> ☀️</div>
                : <div className="text-xl" onClick={() => setTheme("dark")}> 🌒</div>
            }
        </div>
    )
}

export default Theme
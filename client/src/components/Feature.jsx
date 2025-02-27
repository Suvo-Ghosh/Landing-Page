import React from 'react'

function Feature({ item }) {
    return (
        <div className={`p-2 h-[180px] flex flex-col items-center rounded-xl max-w-[500px]`} style={{ backgroundColor: item.color }}>
            <p className='text-2xl p-2.5 bg-white rounded-full '>{item.image}</p>
            <h1 className='font-bold'>{item.name}</h1>
            <h1 className='text-center text-white font-medium'>{item.description}</h1>
        </div>
    )
}

export default Feature
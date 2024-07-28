import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
    return (
        <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h1>Github followers: {data.followers}</h1>
            <div className='mt-2 bg-cover bg-center flex fl justify-center items-center'>
                <img src={data.avatar_url} alt="" className='w-32 rounded-full ' /></div>
            </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

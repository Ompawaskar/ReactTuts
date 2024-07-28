import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function Postcard({
    $id,
    title,
    featuredImage,
}) {
    return (
        <Link to= {`/post/${$id}`}>
         <div className='bg-gray-100 rounded-xl w-full p-4'>
            <div className='w-full justify-center mb-4'>
                <div>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
         </div>
        </Link>
    )
}

export default Postcard

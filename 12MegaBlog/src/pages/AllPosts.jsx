import React, { useEffect, useState } from 'react'
import appwriteservice from '../appwrite/config'
import { Container, Postcard } from '../components'


function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(() => {},[])
    appwriteservice.getPosts([]).then((posts) => { 
        if(posts){
            setPosts(posts)
        }
    }
    )
    
    return (
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='w-1/4 p-2' >
                        <Postcard post = {post} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default AllPosts

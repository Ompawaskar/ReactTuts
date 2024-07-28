import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import service from './appwrite/config'
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const dummyPost = {
    title: "This is a Dummy Post",
    slug: "dummy-post",
    content: "This is some example content for the dummy post. You can replace this with your actual post content.",
    featuredImage: "path/to/your/image.jpg", // Replace with the actual image path
    status: "published", // Or "draft" depending on your needs
    userId: "your_user_id", // Replace with the actual user ID
  };

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor] = useState('olive')
  const [text,setText] = useState("")
  return (
    <>
     <div className='w-full relative h-screen duration-200'
     style={{backgroundColor: color}}>
      <div className='absolute inset-0 mt-40 text-white font-bold text-lg'>
        <h1>{text}</h1></div>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl'>
          <button className='px-4 py-1 rounded-full text-white outline-none'
          style={{backgroundColor:"red"}} onClick={() => 
          {
            setcolor("red");
            setText("Red");

             }}>Red</button>

          <button className='px-4 py-1 rounded-full text-white'
          style={{backgroundColor:"green"}} onClick={() => {setcolor("green");
          setText("Green");}}>Green</button> 

          <button className='px-4 py-1 rounded-full text-white'
          style={{backgroundColor:"blue"}} onClick={() => {setcolor("blue");
          setText("Blue");}}>Blue</button>

          <button className='px-4 py-1 rounded-full text-white'
          style={{backgroundColor:"yellow"}} onClick={() => {setcolor("yellow");
          setText("Yellow");}}>Yellow</button>

          <button className='px-4 py-1 rounded-full text-white'
          style={{backgroundColor:"purple"}} onClick={() => {setcolor("purple");
          setText("Purple");}}>Purple</button>


       </div>
      </div>
     </div>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'

function Test(test) {
const [data,setData] = useState("Hello")
useEffect(()=>{
    console.log("Hello I have been called");
},[test])

return data
}

export default Test

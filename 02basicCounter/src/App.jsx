import './App.css'
import { useState } from 'react';

function App() {

let [counter,setCounter] = useState(15) //useState gives us 2 thingsin form of a array. 1st is variable and 2nd is function. When setCounter updates counter it propogates it through whole UI.


const addValue = () => {
  // counter++;
  // console.log(counter);
  // document.getElementById("counterVal").textContent = `${counter}`;

  if(counter<20){
  setCounter(counter + 1);
  }
}
const removeValue = () => {
  // counter--;//In this method we are not changing counter but innerHtml
  //  console.log(counter);
  // document.getElementById("counterVal").textContent = `${counter}`;

   if(counter>0){
   setCounter(counter - 1);
   setCounter((prev) => {
    prev + 1
   })
   }

}
  return (
    <>
     <h1>Chai Aur React</h1>
     <h2 id='counterVal'>Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value:{counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value:{counter}</button>
    </>
  )
}

export default App

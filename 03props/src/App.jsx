import './App.css'
import Card from './Card'

function App() {
  let myObj = {
    username:"hitesh",
    age:21
  }

  let newArr = [1,2,3]
  return (
    <div className="flex">
   <Card username = "Chai aur Code" someObj = {myObj} myArr = {newArr} btnText = "Click Me" className = "mr-4"/>
   <Card/>
   </div>
   
  )
}

export default App

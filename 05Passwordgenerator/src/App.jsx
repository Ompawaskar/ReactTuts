import {useState,useCallback,useEffect,useRef} from 'react'

function App() {
const [lenght,setlenght] = useState(8)
const [numberAllowed,setNumberAllowed] = useState(false)
const [charAllowed,setCharAllowed] = useState(false)
const [password,setpassword] = useState("")
const passwordRef = useRef(null)

const passGenerator = useCallback(() => {
  let pass = "";
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let num = '0123456789';
  let specialChar = '!@#$%^&*()-_=+[]{}|;:=",.<>/?';  

  if(numberAllowed) string+=num
  if(charAllowed) string+=specialChar

  for (let i = 1; i <= lenght; i++) {
   let char =Math.floor(Math.random()*string.length + 1)
   pass += string.charAt(char)
  }

  setpassword(pass);

},[lenght,numberAllowed,charAllowed,setpassword]);

const copyToClipBoard = useCallback(() => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password);
},[password])

useEffect(() => {
  passGenerator();
},[lenght,numberAllowed,charAllowed,passGenerator])



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 font-mono text-lg bg-gray-700 py-4'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow-md rounded-md overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}  />
      <button 
      onClick={() => {
        copyToClipBoard();
      }}
      className='bg-blue-500 text-white px-3 py-3 rounded-md hover:bg-blue-700 font-bold '>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min = {6}
          max={100}
          value={lenght}
          className='cursor-pointer text-blue-600'
          style={{'--thumb-color': 'blue'}}
          onChange={(e) => {
            setlenght(e.target.value)
          }}
           />
          <label >Lenght:{lenght}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          value={numberAllowed}
          defaultChecked = {numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => {
              return !prev;
          });
          }} />
          <label >Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          value={charAllowed}
          defaultChecked = {charAllowed}
          onChange={() => {
            setCharAllowed(!charAllowed);
          }} />
          <label>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
 
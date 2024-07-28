import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  
  }

  const swap = () => {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
  }

  const options = Object.keys(useCurrencyInfo(from))



  return (
    <>
     <div
     className='w-full h-screen flex flex-wrap justify-center items-center
     bg-cover bg-no-repeat' style={{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1670992114120-4e481a5c89c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2lsaWNvbiUyMHZhbGxleXxlbnwwfHwwfHx8MA%3D%3D')`}}>

    <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form 
      onSubmit={(e) => {
       e.preventDefault();
       convert();
      }}>
        
      <div className='w-full mb-1'>
       <InputBox
        label = "From"
        amount = {amount}
        currencyOptions = {options}
        onAmountChange = {(amount) => {
          setAmount(amount)
        }}
        onCurrencyChange = {(currency) => {
          setFrom(currency)
        }}
        selectedCurrency = {from}
        />
      </div>

      <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

      <div className='w-full mb-1'>
       <InputBox
        label = "To"
        amount = {convertedAmount}
        currencyOptions = {options}
        onCurrencyChange = {(currency) => {
          setTo(currency)
        }}
        selectedCurrency = {to}
        amountDisable
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>

      </form>
    </div>

     
     </div>
    </>
  )
}

export default App

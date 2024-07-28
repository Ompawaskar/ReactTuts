import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Test from './hooks/test'

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setfrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)
  console.log(amount);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);
  const test1 = Test(to)
  console.log("Test:",test1);
  const swap = () => {
    setfrom(to)
    console.log(`From:${from}`);
    setTo(from)
    console.log(`To:${to}`);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  console.log(`New From:${from}`);
  console.log(`New To:${to}`);
 

 const convert = () =>{
   setConvertedAmount(amount*currencyInfo[to])
 }

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black"
            style={{
                backgroundImage :`url('https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D')`
            }}   
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                // onAmountChange={(amount) => {
                                //     setAmount(amount) 
                                // }}
                                onAmountChange= {setAmount}

                                onCurrencyChange={(currency) => 
                                  setfrom(currency)
                                }
                                selectCurrency={from}     
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
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to} 
                                    amountDisable  
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App

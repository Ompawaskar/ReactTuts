import React from 'react'

function InputBox(
  { label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectedCurrency,
    currencyOptions = [],
    amountDisable = false,
    currencyDisable = false}
) {

    return (
       <div className='bg-white text-sm flex rounded-md'>
        <div className='w-1/2'>
            <label className='text-gray-300 mb-2 inline-block'>
              {label}
            </label>
            <input 
            type="number"
            className='outline-none bg-transparent w-full'
            value={amount}
            placeholder='Amount'
            onChange={(e) => {
                onAmountChange(Number(e.target.value))
            }}
            disabled = {amountDisable}
             />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >   
                        {currencyOptions.map((currency) => 
                        (<option key={currency} value={currency}>
                          {currency}
                         </option>)) 
                        }      
        </select>
        </div>
       </div> 
    )
}

export default InputBox

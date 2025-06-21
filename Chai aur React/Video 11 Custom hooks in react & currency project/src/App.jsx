import { useState } from 'react'
import { InputBox } from './components'  // importing our component from index.js
import useCurrencyInfo from './hooks/useCurrencyInfo'  // importing our custom hook


function App() {

  const [amount, setAmount] = useState(0);  // variable to display amount entered by user
  const [from, setFrom] = useState('usd');  // from currency
  const [to, setTo] = useState('inr');  // to currency
  const [convertedAmount, setConvertedAmount] = useState(0);  // variable to display the conversion result

  const currencyInfo = useCurrencyInfo(from)  // calling our custom hook and passing from (which contains the currency selected by user) as argument & storing the returned data in varible

  const options = Object.keys(currencyInfo)  // getting access of all the keys in data returned by our custom hook

  const swap = () => {  // function to swap values
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {  // function to display the converted amount
    setConvertedAmount(amount * currencyInfo[to])  // multiplying the amount given by user to the 
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2021/01/29/12/31/bitcoin-5960859_1280.jpg')`,
      }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>
            <div className="w-full mb-1">
              <InputBox   // inserting our custom component and passing props in our component
                label="From"
                amount={amount}  // amount to be converted given by the user
                onAmountChange={(amount) => setAmount(amount)}  // defining function for when user changes the amount to be converted
                onCurrencyChange={(currency) => setFrom(currency)}  // defining function for when users selects another currency and also updating the from variable
                currencyOptions={options}  // currencies to be displyed in the options
                selectCurrency={from}  // this binds "from" to the selected option in dropdown in the from label
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
                onClick={swap}  // calling the swap function on clicking the swap button
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}  // converted amount to be shown. this also binds the convertedAmount variable to the actual converted amount
                currencyOptions={options}  // currencies to be displyed in the options
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}  // this binds "to" to the selected option in dropdown in to label
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
  );
}

export default App

import React, { useId } from 'react'


function InputBox({
    label,  // from or to
    amount,  //
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
    const amountInputId = useId()  // useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}  // binding this label to it's input through useId hook
                    className="text-black/40 mb-2 inline-block">
                    {label}  {/* from or to */}
                </label>
                <input
                    id={amountInputId}  // binding this input with it's label useId hook
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}  // checking weather amount input option is enabled or disabled
                    value={amount}  // the amount users inputs
                    onChange={(e) => onAmountChange &&  // call onAmountChange only if it is available (using &&)
                        onAmountChange(Number(e.target.value))}  // converting the e.value to number as js takes values in events as a string
                />  {/* React controls the value of the input through the amount state. */}
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}  // this sets the currently selected value from the dropdown
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  // updating the value when user changes the dropdown selection. this calls setFrom()
                    disabled={currencyDisable}  // checking weather select option is enabled or disabled
                >
                    {currencyOptions.map((currency) => (  // looping the currencyOptions array to display all the available currencies as options
                        <option key={currency} value={currency}>  {/* always use keys while using loops in react */}
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
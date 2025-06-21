import { useEffect, useState } from "react";
// Additional API url `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`

// Custom hook
function useCurrencyInfo(currency) {  // it's a convention to start the name of the hook with "use"
    const [data, setData] = useState({})  // creating variable using useState to store and update data recieved from fetch in the UI

    useEffect(() => {  // using useEffect hook so that this custom hook runs only when it is being used
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())  // coverting the data recieved from fetch into json
            .then((res) => setData(res[currency]))  // using bracket notation here as property name is dynamic
            .catch((err) => {
                console.error('Failed to fetch data', err)
            })
    }, [currency])  // fetch will be called whenever currency changes
    return data
}  

export default useCurrencyInfo;
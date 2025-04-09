import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [currencyInfoData, setCurrencyInfoData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setCurrencyInfoData(res[currency]))
    }, [currency]);
    
    return currencyInfoData;
}

export default useCurrencyInfo;
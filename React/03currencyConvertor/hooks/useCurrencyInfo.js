import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [currencyInfoData, setCurrencyInfoData] = useState({});
    useEffect(async () => {
        let currInfo = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        currInfo = await currInfo.json();
        setCurrencyInfoData(currencyInfoData);
        console.log(currInfo);
    }, [currency]);
    return currencyInfoData;
}

export default useCurrencyInfo;
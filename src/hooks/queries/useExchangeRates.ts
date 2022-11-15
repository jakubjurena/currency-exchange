import { useQuery } from "react-query";

import { getExchangeRates } from "../../api";
import { useSelectedExchangeRate } from "../state";

export const useExchangeRates = () => {
    const setSelectedExchangeRate = useSelectedExchangeRate(
        (state) => state.setRate
    );

    const query = useQuery("rates", getExchangeRates, {
        onSuccess: (data) => setSelectedExchangeRate(data?.exchangeRates[0])
    })
    
    return query;
};

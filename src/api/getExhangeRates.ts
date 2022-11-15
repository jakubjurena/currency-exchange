import { QueryFunction } from "react-query";

import { CNB_EXCHANGE_RATES_URL } from "../constants";
import { ParsedData } from "../types";
import { parseCurrenciesData, sleep } from "../utils";

export const getExchangeRates: QueryFunction<ParsedData | undefined> = async ({ signal }) => {

    const response = await fetch(CNB_EXCHANGE_RATES_URL, { signal });
    const rawData = await response.text();
    const data = parseCurrenciesData(rawData);

    await sleep(1500); // Only to show page loading

    return data;
}

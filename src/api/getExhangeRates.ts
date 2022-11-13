import { QueryFunction } from "react-query";

import { CNB_EXCHANGE_RATES_URL } from "../constants";
import { rawData } from "../mocks";
import { ParsedData } from "../types";
import { parseCurrenciesData, sleep } from "../utils";

export const getExchangeRates: QueryFunction<ParsedData | undefined> = async ({ signal }) => {

    const headers = new Headers()
    headers.append("Content-Type", "text/plain");
    headers.append("Accept", "text/plain");
    const response = await fetch(CNB_EXCHANGE_RATES_URL, { mode: "no-cors", headers, signal });
    const text = await response.text();
    console.log(response.statusText, text);
    // TODO: fix CORS and use response. Parse real data instead of mock.
    const data = parseCurrenciesData(rawData);

    await sleep(1000); // Only to show page loading

    return data;
}

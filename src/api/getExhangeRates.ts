import { CNB_EXCHANGE_RATES_URL } from "../constants";
import { rawData } from "../mocks";
import { ParsedData } from "../types";
import { parseCurrenciesData, sleep } from "../utils";

export const getExchangeRates = async (): Promise<ParsedData | undefined> => {
    const response = await fetch(CNB_EXCHANGE_RATES_URL, { mode: "no-cors"});
    console.log(response.ok);
    const data = parseCurrenciesData(rawData); // TODO: fix CORS and use response

    await sleep(1000);
    return data;
}

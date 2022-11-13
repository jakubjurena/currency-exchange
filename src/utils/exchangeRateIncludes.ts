import { ExchangeRate } from "../types";

export const exchangeRateIncludes = (exchangeRate: ExchangeRate, substring: string): boolean => {
    const lowerCaseSubstring = substring.toLowerCase();
    return (
        exchangeRate.code.toLowerCase().includes(lowerCaseSubstring)
        || exchangeRate.country.toLowerCase().includes(lowerCaseSubstring)
        || exchangeRate.currency.toLowerCase().includes(lowerCaseSubstring)
    )
}

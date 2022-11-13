import { ExchangeRate } from "../types";

/**
 * Filter function for exchangeRate.
 * 
 * @param exchangeRate Tested exchange rate.
 * @param substring String searched for.
 * @returns `true` if exchange rate contains substring, `false` orherwise.
 */
export const exchangeRateIncludes = (exchangeRate: ExchangeRate, substring: string): boolean => {
    const lowerCaseSubstring = substring.toLowerCase();
    return (
        exchangeRate.code.toLowerCase().includes(lowerCaseSubstring)
        || exchangeRate.country.toLowerCase().includes(lowerCaseSubstring)
        || exchangeRate.currency.toLowerCase().includes(lowerCaseSubstring)
    )
}

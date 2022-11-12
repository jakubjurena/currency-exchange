export type ExchangeRate = {
    country: string;
    currency: string;
    amount: number;
    code: string;
    rate: number;
}

/**
 * ReturnType for `parseCurrenciesData`.
 */
export type ParsedData = {
    /** Date for which the exchange rate was declared. */
    date: Date;
    /** List of exchange rates. */
    exchangeRates: ExchangeRate[];
}

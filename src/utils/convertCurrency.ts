import { ExchangeRate } from "../types";

/**
 * Converts czk to another currency.
 * 
 * @param czkAmount Czk amount to convert.
 * @param exchangeRate Exchange rate to wanted currency.
 * @param decimalPlaces Decimal places count.
 * @returns Converted amount to new currency
 */
export const convertCurrency = (
    czkAmount: number,
    exchangeRate: ExchangeRate,
    decimalPlaces: number = 2,
): number => {
    const decimalPlacesHelper = Math.pow(10, decimalPlaces);
    return Math.round(
        czkAmount / exchangeRate.rate * exchangeRate.amount * decimalPlacesHelper
    ) / decimalPlacesHelper;
};

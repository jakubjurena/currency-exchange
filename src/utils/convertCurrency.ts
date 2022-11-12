export const convertCurrency = (
    czkAmount: number,
    currencyAmount: number,
    currencyRate: number,
    decimalPlaces: number = 2,
): number => {
    const decimalPlacesHelper = Math.pow(10, decimalPlaces);
    return Math.round(
        czkAmount / currencyRate * currencyAmount * decimalPlacesHelper
    ) / decimalPlacesHelper;
}

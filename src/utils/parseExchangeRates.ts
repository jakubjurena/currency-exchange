import { ExchangeRate, ParsedData } from "../types";

const parseDataLine = (dataLine: string): ExchangeRate => {
    const values = dataLine.split("|");
    if (values.length !== 5) {
        throw new Error("Every exchange rate has to have exactly 5 parameters.");
    }
    const amount = parseFloat(values[2]);
    const rate = parseFloat(values[4]);
    if (isNaN(amount) || isNaN(rate)) {
        throw new Error("Amount and rate have to be numbers.");
    }
    return {
        country: values[0],
        currency: values[1],
        amount: parseFloat(values[2]),
        code: values[3],
        rate: parseFloat(values[4]),
    }
}

/**
 * Function parses data from request.
 * 
 * @param rawData Data from request.
 * @returns Parsed data (date and exchange rates)
 */
export const parseCurrenciesData = (rawData: string): ParsedData | undefined => {
    try {
        const lines = rawData.split("\n");
        const date = new Date(lines[0].split("  ")[0]);

        const dataLines = lines.slice(2); // Throw away date and headers.

        return {
            date,
            exchangeRates: dataLines.map(parseDataLine),
        };
    } catch (e) {
        if (e instanceof Error) {
            console.error("Invalid API response", e.message);
            // Show error to user? Is "Something went wrong" enough?
        }
    }
    return;
}
import { ExchangeRate } from "../types";
import { convertCurrency } from "./convertCurrency"

// Example unit tests.
describe("convertCurrency", () => {
    type TestCases = [string, {
        params: Parameters<typeof convertCurrency>,
        result: number;
    }][]
    const createExchangeRate = (amount: number, rate: number): ExchangeRate => ({
        amount,
        rate,
        code: 'TST',
        country: 'Test',
        currency: 'testing currency',
    });
    const testCases: TestCases = [
        [
            "100 czk with 1.5 rate",
            {
                params: [100, createExchangeRate(1, 1.5), 0],
                result: 67,
            }
        ],
        [
            "100 czk with 1.5 rate - default decimal",
            {
                params: [100, createExchangeRate(1, 1.5)],
                result: 66.67,
            }
        ],
        [
            "100 czk with 1.5 rate - 4 decimal places",
            {
                params: [100, createExchangeRate(1, 1.5), 4],
                result: 66.6667,
            }
        ],
        [
            "negative czk amoutn",
            {
                params: [-100, createExchangeRate(1, 1.5), 4],
                result: NaN,
            }
        ],
        [
            "negative convert amount",
            {
                params: [100, createExchangeRate(-1, 1.5), 4],
                result: NaN,
            }
        ],
        [
            "negative convert rate",
            {
                params: [100, createExchangeRate(1, -1.5), 4],
                result: NaN,
            }
        ],
        [
            "negative decimal places",
            {
                params: [100, createExchangeRate(1, 1.5), -4],
                result: NaN,
            }
        ],
    ]
    it.each(testCases)("%s", (_description, { params, result }) => {
        expect(convertCurrency(...params)).toBe(result);
    });
})
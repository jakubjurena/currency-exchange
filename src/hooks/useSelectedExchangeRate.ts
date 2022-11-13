import create from "zustand";
import { ExchangeRate } from "../types";

type SelectedExchangeRateState = {
    rate: ExchangeRate | undefined;
};

type SelectedExchangeRateAction = {
    setRate: (newRate: ExchangeRate | undefined) => void;
};

export const useSelectedExchangeRate = create<SelectedExchangeRateState & SelectedExchangeRateAction>()((set) => ({
    rate: undefined,
    setRate: (newRate) => set(() => ({ rate: newRate })),
}));

import { useQuery } from "react-query";

import { getExchangeRates } from "../../api";

export const useExchangeRates = () => useQuery("rates", getExchangeRates);

import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { getExchangeRates } from '../api/getExhangeRates';

export const Table: FunctionComponent = () => {
    const {data, isError, isLoading} = useQuery("rates", getExchangeRates);

    //TODO: implement
    return (
        <div>
            Is Loading: {isLoading ? "true" : "false"}<br />
            Is Error: {isError ? "true" : "false"}<br />
            Data count: {data?.exchangeRates.length || 0}
        </div>
    )
}
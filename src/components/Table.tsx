import React, { FunctionComponent, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getExchangeRates } from '../api/getExhangeRates';
import { exchangeRateIncludes } from '../utils';
import { Input } from './Input';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

type TableContainerProps = {
    isLoading: boolean;
}

const TableContainer = styled.div<TableContainerProps>`
    height: 500px;
    overflow-y: scroll;
    width: 100%;
    display: flex;
    align-items: ${({ isLoading }) => isLoading ? "center" : undefined};
    justify-content: center;
`

export const Table: FunctionComponent = () => {
    const [search, setSearch] = useState("");
    const {data, isError, isLoading} = useQuery("rates", getExchangeRates);

    return (
        <TableContainer {...{isLoading}}>
            {isLoading && "Loading data, please wait."}
            {isError && "Error occured, please refresh page and try again."}
            {!isLoading && !isError && (
                <>
                    <Input type={"text"} onChange={(e) => setSearch(e.target.value)}/>
                    <table>
                        <thead>
                            <TableHeader />
                        </thead>
                        <tbody>
                            {data?.exchangeRates
                                .filter(
                                    exchangeRate => exchangeRateIncludes(exchangeRate, search)
                                )
                                .map(
                                    exchangeRate => <TableRow {...exchangeRate} key={exchangeRate.code} />
                                )
                            }
                        </tbody>
                    </table>
                </>
            )}
        </TableContainer>
    )
}
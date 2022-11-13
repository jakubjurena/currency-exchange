import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { useExchangeRates } from '../hooks';
import { inputContainer, rounded } from '../mixins';
import { exchangeRateIncludes } from '../utils';
import { EmptyRow } from './EmptyRow';
import { Input } from './Input';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

const SearchConatiner = styled.div`
    ${inputContainer}
`

type TableContainerProps = {
    alignItemCenter: boolean;
}

const TableContainer = styled.div<TableContainerProps>`
    overflow-y: scroll;
    display: flex;
    align-items: ${({ alignItemCenter }) => alignItemCenter ? "center" : undefined};
    justify-content: center;
    width: var(--table-width);
    max-width: var(--table-max-width);
    height: 350px;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    ${rounded}
`

type TableProps = {
    isEmpty?: boolean;
}

const Table = styled.table<TableProps>`
    border: none;
    border-collapse: collapse;
    width: 100%;
    height: ${({ isEmpty }) => isEmpty ? "auto" : "fit-content" };
`

export const DataPreview: FunctionComponent = () => {
    const [search, setSearch] = useState("");
    const {data, isError, isLoading} = useExchangeRates();

    const filteredRates = data?.exchangeRates
        .filter(
            exchangeRate => exchangeRateIncludes(exchangeRate, search)
        )
    const isEmpty = !filteredRates || filteredRates.length === 0;

    return (
        <>
            <SearchConatiner>
                <Input
                    type={"text"}
                    onChange={(e) => setSearch(e.target.value)}
                    disabled={isLoading}
                    placeholder={"Type to search"}
                />
            </SearchConatiner>
            <TableContainer {...{alignItemCenter: isLoading || isError}}>
                {isLoading && "Loading data, please wait."}
                {isError && "Error occured, please refresh page and try again."}
                {!isLoading && !isError && (
                    <Table {...{ isEmpty }}>
                        <thead>
                            <TableHeader />
                        </thead>
                        <tbody>
                            {
                                (isEmpty) && <EmptyRow {...{search}} />
                            }
                            {
                                filteredRates?.map(
                                    exchangeRate => <TableRow {...exchangeRate} key={exchangeRate.code} />
                                )
                            }
                        </tbody>
                    </Table>
                )}
            </TableContainer>
        </>
    )
}
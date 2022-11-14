import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { useExchangeRates } from '../hooks';
import { inputContainer, rounded, visuallyHidden } from '../mixins';
import { exchangeRateIncludes } from '../utils';
import { StatusRow } from './StatusRow';
import { Input } from './Input';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

const SearchConatiner = styled.div`
    ${inputContainer}
`

const TableContainer = styled.div`
    overflow-y: scroll;
    display: flex;
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
    text-align: left;
    position: relative;
`

const DateContainer = styled.div`
    padding: 0.5rem;
    font-size: 80%;
    align-self: end;
    height: var(--font-size);
`

const Thead = styled.thead`
    position: sticky;
    top: 0;
    background-color: var(--background-color);
    @media screen and (max-width: 600px) {
        ${visuallyHidden}
    }
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
            <TableContainer>
                <Table>
                    <Thead>
                        <TableHeader />
                    </Thead>
                    <tbody>
                        { (!isLoading && isEmpty) && <StatusRow text={`No result for "${search}"`} /> }
                        { (isLoading) && <StatusRow text={`Loading data, please wait.`} /> }
                        { (!isLoading && isError) && <StatusRow text={`Error occured, please refresh page and try again.`} /> }
                        {
                            filteredRates?.map(
                                exchangeRate => <TableRow {...exchangeRate} key={exchangeRate.code} />
                                )
                            }
                    </tbody>
                </Table>
            </TableContainer>
            <DateContainer>{!isLoading && "Rates from"} {!isLoading && data?.date.toLocaleDateString()}</DateContainer>
        </>
    )
}
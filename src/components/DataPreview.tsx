import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { useExchangeRates } from '../hooks';
import { inputContainer } from '../mixins';
import { exchangeRateIncludes } from '../utils';
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
    height: 500px;
    overflow-y: scroll;
    display: flex;
    align-items: ${({ alignItemCenter }) => alignItemCenter ? "center" : undefined};
    justify-content: center;
`

const Table = styled.table`
    border: none;
    border-collapse: collapse;
`

export const DataPreview: FunctionComponent = () => {
    const [search, setSearch] = useState("");
    const {data, isError, isLoading} = useExchangeRates();

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
                    <Table>
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
                    </Table>
                )}
            </TableContainer>
        </>
    )
}
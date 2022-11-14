import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useSelectedExchangeRate } from '../hooks';
import { ExchangeRate } from '../types';

const Tr = styled.tr`
    cursor: pointer;
    transition: var(--transition);
    &:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }
    @media screen and (max-width: 600px) {
        display: block;
        padding: 0 1rem;
    }
    &:hover {
        background-color: rgba(138, 69, 255, 0.2);
    }
`;

const Td = styled.td`
    padding: .5rem 5px;

    @media screen and (max-width: 600px) {
        display: block;
        text-align: right;
        border-bottom: 1px solid var(--border-color);

        &::before {
            content: attr(data-label);
            float: left;
            font-weight: var(--font-weight-bold);
        }
    }
`;

export type TableRowProps = ExchangeRate;

export const TableRow: FunctionComponent<TableRowProps> = ({country, currency, amount, code, rate}) => {
    const setRate = useSelectedExchangeRate((state) => state.setRate);
    return (
        <Tr
            onClick={() => setRate({country, currency, amount, code, rate})}
            title={`Click to select ${code} as convertion rate`}
        >
            <Td data-label={"Country"}>{country}</Td>
            <Td data-label={"Currency"}>{currency}</Td>
            <Td data-label={"Code"}>{code}</Td>
            <Td data-label={"Amount"}>{amount}</Td>
            <Td data-label={"Rate"}>{rate}</Td>
        </Tr>
    )
};

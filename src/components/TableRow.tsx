import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useSelectedExchangeRate } from '../hooks';
import { hideOnSmallScreen } from '../mixins';
import { ExchangeRate } from '../types';

const Tr = styled.tr`
    cursor: pointer;
    transition: var(--transition);
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const Td = styled.td`
    ${hideOnSmallScreen}
    padding: 0 5px;
`;

export type TableRowProps = ExchangeRate;

export const TableRow: FunctionComponent<TableRowProps> = ({country, currency, amount, code, rate}) => {
    const setRate = useSelectedExchangeRate((state) => state.setRate);
    return (
        <Tr onClick={() => setRate({country, currency, amount, code, rate})}>
            <Td hideOnSmallScreen>{country}</Td>
            <Td hideOnSmallScreen>{currency}</Td>
            <Td>{code}</Td>
            <Td>{amount}</Td>
            <Td>{rate}</Td>
        </Tr>
    )
};

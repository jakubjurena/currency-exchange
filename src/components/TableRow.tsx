import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { smallScreen } from '../mixins';
import { ExchangeRate } from '../types';

const Tr = styled.tr`
    
`;

const Td = styled.td`
    ${smallScreen}
`;

export type TableRowProps = ExchangeRate;

export const TableRow: FunctionComponent<TableRowProps> = ({country, currency, amount, code, rate}) => (
    <Tr>
        <Td hideOnSmallScreen>{country}</Td>
        <Td hideOnSmallScreen>{currency}</Td>
        <Td>{code}</Td>
        <Td>{amount}</Td>
        <Td>{rate}</Td>
    </Tr>
)
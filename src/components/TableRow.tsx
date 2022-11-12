import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ExchangeRate } from '../types';

const Tr = styled.tr`
    
`;

const Td = styled.td`
    
`;

export type TableRowProps = ExchangeRate;

export const TableRow: FunctionComponent<TableRowProps> = ({country, currency, amount, code, rate}) => (
    <Tr>
        <Td>{country}</Td>
        <Td>{currency}</Td>
        <Td>{code}</Td>
        <Td>{amount}</Td>
        <Td>{rate}</Td>
    </Tr>
)
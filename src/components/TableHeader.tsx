import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Th = styled.th`
    padding: .75rem .25rem;
`;

export const TableHeader: FunctionComponent = () => (
    <tr>
        <Th>Country</Th>
        <Th>Currency</Th>
        <Th>Code</Th>
        <Th>Amount</Th>
        <Th>Rate</Th>
    </tr>
)
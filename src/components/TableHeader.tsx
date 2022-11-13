import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
    
`;

const Th = styled.th`
    
`;

export const TableHeader: FunctionComponent = () => (
    <Tr>
        <Th>Country</Th>
        <Th>Currency</Th>
        <Th>Code</Th>
        <Th>Amount</Th>
        <Th>Rate</Th>
    </Tr>
)
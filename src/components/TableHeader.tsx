import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { smallScreen } from '../mixins';

const Tr = styled.tr`
    
`;

const Th = styled.th`
    ${smallScreen}
`;

export const TableHeader: FunctionComponent = () => (
    <Tr>
        <Th hideOnSmallScreen>Country</Th>
        <Th hideOnSmallScreen>Currency</Th>
        <Th>Code</Th>
        <Th>Amount</Th>
        <Th>Rate</Th>
    </Tr>
)
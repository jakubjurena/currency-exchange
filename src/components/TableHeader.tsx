import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { hideOnSmallScreen } from '../mixins';

const Th = styled.th`
    ${hideOnSmallScreen}
`;

export const TableHeader: FunctionComponent = () => (
    <tr>
        <Th hideOnSmallScreen>Country</Th>
        <Th hideOnSmallScreen>Currency</Th>
        <Th>Code</Th>
        <Th>Amount</Th>
        <Th>Rate</Th>
    </tr>
)
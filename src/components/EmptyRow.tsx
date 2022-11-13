import { FunctionComponent } from "react";
import styled from "styled-components";

const Td = styled.td`
    text-align: center;
`

export type EmptyRowProps = {
    search: string;
}

export const EmptyRow: FunctionComponent<EmptyRowProps> = ({
    search,
}) => (
    <tr>
        <Td colSpan={5}>
            No result for "{search}"
        </Td>
    </tr>
);

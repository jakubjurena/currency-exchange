import { FunctionComponent } from "react";
import styled from "styled-components";

const Td = styled.td`
    text-align: center;
`

export type StatusRowProps = {
    text: string;
}

export const StatusRow: FunctionComponent<StatusRowProps> = ({
    text,
}) => (
    <tr>
        <Td colSpan={5}>
            {text}
        </Td>
    </tr>
);

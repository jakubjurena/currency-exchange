import { FunctionComponent } from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
margin-bottom: 2rem;
`

export type ExchangeResultProps = {
    czkAmount: number;
    currencyAmount: number;
    currencyCode: string;
}

export const ExchangeResult: FunctionComponent<ExchangeResultProps> = ({
    czkAmount,
    currencyAmount,
    currencyCode,
}) => (
    <ResultContainer>
        {`${czkAmount} CZK = ${currencyAmount} ${currencyCode}`}
    </ResultContainer>
)
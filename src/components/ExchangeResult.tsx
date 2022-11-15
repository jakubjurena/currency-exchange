import { FunctionComponent } from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
margin-bottom: 2rem;
`

export type ExchangeResultType = {
    czkAmount: number;
    currencyAmount: number;
    currencyCode: string;
}

export type ExchangeResultProps = {
    result?: ExchangeResultType;
}

export const ExchangeResult: FunctionComponent<ExchangeResultProps> = ({
    result
}) => {
    if (!result || isNaN(result.czkAmount) || isNaN(result.currencyAmount)) {
        return null;
    }

    return (
        <ResultContainer>
            {`${result.czkAmount.toLocaleString()} CZK = ${result.currencyAmount.toLocaleString()} ${result.currencyCode}`}
        </ResultContainer>
    )
}

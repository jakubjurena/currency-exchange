import { FunctionComponent, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getExchangeRates } from '../api/getExhangeRates';
import { useSelectedExchangeRate } from '../hooks/useSelectedExchangeRate';
import { inputContainer } from '../mixins';
import { convertCurrency } from '../utils';
import { Input } from './Input';
import { Select } from './Select';


const Form = styled.form`
    ${inputContainer}
    margin-top: 2rem;
`

const SubmitButton = styled(Input)`
    border: none;
    background-color: ${({ disabled }) => disabled ? "#919191" : "rgb(138, 69, 255)"};
    color: #fff;
    cursor: ${({ disabled }) => disabled ? undefined : "pointer"};
    &:hover {
        
        background-color: ${({ disabled }) => disabled ? undefined : "rgb(104, 15, 255)"};;
    }
`

const ResultContainer = styled.div`
    margin-bottom: 2rem;
`

type Result = {
    czkAmount: number;
    rateAmount: number;
    rateCode: string;
}

export const ExchangeForm: FunctionComponent = () => {
    const [selectedExchangeRate, setSelectedExchangeRate] = useSelectedExchangeRate(
        (state) => [state.rate, state.setRate]
    );
    const [result, setResult] = useState<Result | undefined>();
    const [czkAmount, setCzkAmount] = useState<number | undefined>(undefined)
    const {data, isLoading} = useQuery("rates", getExchangeRates);

    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault();
                if (!selectedExchangeRate || !czkAmount) {
                    return;
                }
                setResult({
                    czkAmount,
                    rateAmount: convertCurrency(
                        czkAmount,
                        selectedExchangeRate.amount,
                        selectedExchangeRate.rate
                    ),
                    rateCode: selectedExchangeRate?.code
                });
            }}>
                <Input
                    name='czk'
                    placeholder='Type czk amount'
                    type={"number"}
                    disabled={isLoading}
                    onChange={e => setCzkAmount(parseFloat(e.target.value))}
                />
                <Select
                    disabled={isLoading}
                    onChange={(e) =>
                        setSelectedExchangeRate(data?.exchangeRates.find(rate => rate.code === e.target.value))
                    }
                    value={selectedExchangeRate?.code}
                >
                    {data?.exchangeRates.map(
                        exchangeRate => <option key={exchangeRate.code} value={exchangeRate.code}>{`${exchangeRate.country} - ${exchangeRate.currency} (${exchangeRate.code})`}</option>
                    )}
                </Select>
                <SubmitButton type={"submit"} value="Submit" disabled={isLoading} />
            </Form>
            {result !== undefined && !isNaN(result.czkAmount) && selectedExchangeRate && <ResultContainer>{`${result.czkAmount} CZK = ${result.rateAmount} ${result.rateCode}`}</ResultContainer>}
        </>
    )
};

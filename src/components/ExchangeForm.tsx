import { FunctionComponent, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getExchangeRates } from '../api/getExhangeRates';
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

export const ExchangeForm: FunctionComponent = () => {
    const [result, setResult] = useState<number | undefined>();
    const czkRef = useRef<HTMLInputElement>(null);
    const slectRef = useRef<HTMLSelectElement>(null);
    const {data, isLoading} = useQuery("rates", getExchangeRates);

    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault();
                const selectedRate = data?.exchangeRates.find(rate => rate.code === slectRef.current?.value || "");
                if (!selectedRate || !czkRef.current) {
                    return;
                }
                setResult(
                    convertCurrency(
                        parseFloat(czkRef.current.value || ""),
                        selectedRate.amount,
                        selectedRate.rate
                    )
                )
            }}>
                <Input
                    ref={czkRef}
                    name='czk'
                    placeholder='Type czk amount'
                    type={"number"}
                    disabled={isLoading}
                />
                <Select ref={slectRef} disabled={isLoading}>
                    {data?.exchangeRates.map(
                        exchangeRate => <option key={exchangeRate.code} value={exchangeRate.code}>{`${exchangeRate.country} - ${exchangeRate.currency} (${exchangeRate.code})`}</option>
                    )}
                </Select>
                <SubmitButton type={"submit"} value="Submit" disabled={isLoading} />
            </Form>
            {result !== undefined && !isNaN(result) && <ResultContainer>{`${czkRef.current?.value} CZK = ${result} ${slectRef.current?.value}`}</ResultContainer>}
        </>
    )
}
import React, { FunctionComponent, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import styled, { css } from 'styled-components';
import { getExchangeRates } from '../api/getExhangeRates';
import { convertCurrency } from '../utils';

const FormContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 2rem;
`

const Form = styled.form`
    display: flex;
    flex-flow: column;
    padding: 1rem 0;
    width: 75vw;
    max-width: 400px;
`

const inputStyles = css`
border: 1px solid var(--border-color);
border-radius: .5rem;
padding: .5rem 1rem;
margin-bottom: .5rem;
`

const Input = styled.input`
    ${inputStyles}
`

const Select = styled.select`
    ${inputStyles}
`

const SubmitButton = styled(Input)`
    border: none;
    background-color: rgb(138, 69, 255);
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: rgb(104, 15, 255);
    }
`

export const ExchangeForm: FunctionComponent = () => {
    const [result, setResult] = useState<number | undefined>();
    const czkRef = useRef<HTMLInputElement>(null);
    const slectRef = useRef<HTMLSelectElement>(null);
    const {data} = useQuery("rates", getExchangeRates);

    return (
        <FormContainer>
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
                <Input ref={czkRef} name='czk' placeholder='Type czk amount' type={"number"} />
                <Select ref={slectRef}>
                    {data?.exchangeRates.map(
                        exchangeRate => <option value={exchangeRate.code}>{`${exchangeRate.country} - ${exchangeRate.currency} (${exchangeRate.code})`}</option>
                    )}
                </Select>
                <SubmitButton type={"submit"} value="Submit" />
            </Form>
            {result !== undefined && <div>{`${czkRef.current?.value} CZK = ${result} ${slectRef.current?.value}`}</div>}
        </FormContainer>
    )
}
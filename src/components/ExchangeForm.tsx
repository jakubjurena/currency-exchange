import { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useExchangeRates, useSelectedExchangeRate } from '../hooks';
import { inputContainer } from '../mixins';
import { convertCurrency } from '../utils';
import { ExchangeResult, ExchangeResultProps } from './ExchangeResult';
import { Input } from './Input';
import { Select } from './Select';


const Form = styled.form`
    ${inputContainer}
    margin-top: 2rem;
`

const SubmitButton = styled(Input)`
    border: none;
    background-color: ${({ disabled }) => disabled ? "#919191" : "var(--primary-color)"};
    color: #fff;
    cursor: ${({ disabled }) => disabled ? undefined : "pointer"};
    &:hover {
        background-color: ${({ disabled }) => disabled ? undefined : "var(--primary-color-hovered)"};;
    }
`

export const ExchangeForm: FunctionComponent = () => {
    const [selectedExchangeRate, setSelectedExchangeRate] = useSelectedExchangeRate(
        (state) => [state.rate, state.setRate]
    );
    const [result, setResult] = useState<ExchangeResultProps | undefined>();
    const [czkAmount, setCzkAmount] = useState<number | undefined>(undefined)
    const {data, isLoading} = useExchangeRates();

    useEffect(
        () => {
            setSelectedExchangeRate(data?.exchangeRates[0]);
        }, [data?.exchangeRates, setSelectedExchangeRate]
    )

    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault();
                if (!selectedExchangeRate || !czkAmount) {
                    return;
                }
                setResult({
                    czkAmount,
                    currencyAmount: convertCurrency(
                        czkAmount,
                        selectedExchangeRate,
                    ),
                    currencyCode: selectedExchangeRate?.code
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
                        exchangeRate => (
                            <option key={exchangeRate.code} value={exchangeRate.code}>
                                {`${exchangeRate.country} - ${exchangeRate.currency} (${exchangeRate.code})`}
                            </option>
                        )
                    )}
                </Select>
                <SubmitButton type={"submit"} value="Submit" disabled={isLoading} />
            </Form>
            {
                result !== undefined && !isNaN(result.czkAmount) && selectedExchangeRate && <ExchangeResult {...result} />
            }
        </>
    )
};

import { css } from "styled-components";

type InputProps = {
    disabled?: boolean;
}

export const inputBase = css<InputProps>`
    border: 1px solid var(--border-color);
    border-radius: .5rem;
    padding: .5rem 1rem;
    margin-bottom: .5rem;
    background-color: ${({ disabled }) => disabled ? "#e1e1e1" : undefined};
    transition: 300ms;
`

export const inputContainer = css`
    display: flex;
    flex-flow: column;
    padding: 1rem;
    width: var(--input-width);
    max-width: var(--input-max-width);
    transition: 300ms;
`
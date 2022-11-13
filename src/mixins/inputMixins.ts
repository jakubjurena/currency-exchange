import { css } from "styled-components";
import { bordered } from "./border";

type InputProps = {
    disabled?: boolean;
}

/**
 * Mixin for input elements (Input, Select, ...).
 */
export const inputBase = css<InputProps>`
    ${bordered}
    padding: .5rem 1rem;
    margin-bottom: .5rem;
    background-color: ${({ disabled }) => disabled ? "#e1e1e1" : undefined};
    font-size: var(--font-size);
    transition: var(--transition);
`

/**
 * Mixin for input containers.
 * They should appear same.
 */
export const inputContainer = css`
    display: flex;
    flex-flow: column;
    padding: 1rem;
    width: var(--input-width);
    max-width: var(--input-max-width);
`
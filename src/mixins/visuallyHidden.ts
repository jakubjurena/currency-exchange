import { css } from "styled-components";

/**
 * This mixin can be used to hide element,
 * but stay accessible for screen readers.
 */
export const visuallyHidden = css`
    border: 0; 
    clip: rect(0 0 0 0); 
    height: 1px; 
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
`

import { css } from "styled-components";

import { rounded } from "./rounded";

/**
 * Mixin for rounded border.
 */
export const bordered = css`
    border: 1px solid var(--border-color);
    ${rounded}
`

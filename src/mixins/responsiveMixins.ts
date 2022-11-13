import { css } from "styled-components";

type SmallScreenProps = {
    hideOnSmallScreen?: boolean;
}

export const smallScreen = css<SmallScreenProps>`
    @media (max-width: 500px) {
        display: ${({hideOnSmallScreen}) => hideOnSmallScreen ? "none" : undefined};
    }
`

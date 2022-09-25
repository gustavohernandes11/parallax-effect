import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
        @media only screen and (max-width: 769px) {
            padding: ${theme.spacings[8]} 0;
        }
    `}
`;

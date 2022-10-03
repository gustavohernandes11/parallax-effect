import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    ${({ theme }) => css`
        padding: 20px;
        border-bottom: 1px solid grey;
    `}
`;

import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    ${({ theme }) => css`
        padding: 20px;
        display: flex;
        flex-direction: row;
        width: 100%; 
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

        menu {
            display: flex;
            flex-direction: row;
            gap: 10px;

        }
    `}
`;

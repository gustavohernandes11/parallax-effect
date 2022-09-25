import styled, { css } from "styled-components";

interface ContainerInterface {
    theme: any;
}

export const Container = styled.footer`
    ${({ theme }: ContainerInterface) => css`
        padding: ${theme.spacings[4]} ${theme.spacings[14]};

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: ${theme.spacings[4]};

        @media only screen and (max-width: 769px) {
        padding: ${theme.spacings[4]};


        }
    `}
`;

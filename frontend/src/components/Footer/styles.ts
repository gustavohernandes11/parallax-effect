import styled, { css } from "styled-components";

interface ContainerInterface {
    theme: any;
}

export const Container = styled.footer`
    ${({ theme }: ContainerInterface) => css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    `}
`;

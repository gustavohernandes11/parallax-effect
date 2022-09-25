import styled, { css } from "styled-components";

import type { ContainerInterface } from "../../utils/types";

export const Container = styled.div`
    ${({ theme }: ContainerInterface) => css`
        background-color: ${theme.colors.surface};
        color: ${theme.colors.text};

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${theme.spacings[14]};

        @media only screen and (max-width: 600px) {
            padding: 0 ${theme.spacings[8]};
            font-size: ${theme.fontSizes.sm};
        }
    `}
`;
export const Header = styled.header`
    ${({ theme }: any) => css`
    box-shadow: 0px 5px 5px rgb(0, 0, 0, .1);

    `}
`;

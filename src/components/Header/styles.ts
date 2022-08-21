import styled, { css } from "styled-components";

import type { ContainerInterface } from '../../utils/types'

export const Container = styled.div`
    ${({ theme }: ContainerInterface) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${theme.spacings[14]};

        @media only screen and (max-width: 600px) {
            flex-direction: column;
            padding: 0 ${theme.spacings[8]};
            font-size: ${theme.fontSizes.sm};
        }
    `}
`;

import styled, { css } from "styled-components";

import type { ContainerInterface } from "../../utils/types";

export const Container = styled.header`
    ${({ theme }: ContainerInterface) => css`
        color: ${theme.colors.text};
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${theme.spacings[14]};
        box-shadow: 0px 5px 5px rgb(0, 0, 0, 0.1);

        z-index: ${theme.zIndices.sticky};
        position: sticky;
        top: 0;

        @media only screen and (max-width: 600px) {
            padding: 0 ${theme.spacings[8]};
            font-size: ${theme.fontSizes.sm};
        }
    `}
`;
export const Header = styled.header`
    ${({ theme }: any) => css``}
`;

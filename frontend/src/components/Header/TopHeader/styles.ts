import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        padding: ${theme.spacings[2]} ${theme.spacings[14]};
        border-bottom: 1px solid ${theme.colors.border};
        background-color: ${theme.colors.surface};
        font-size: ${theme.fontSizes.xs};
        p {
            margin: 0
        }

        @media only screen and (max-width: 600px) {
            padding: ${theme.spacings[2]} ${theme.spacings[8]};
            font-size: ${theme.fontSizes.xs};
        }
    `}
`;

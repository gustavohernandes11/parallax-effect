import styled, { css } from "styled-components";

interface WrapperInterface {
    theme: any;
    as?: string;
    textAlign?: string;
    size?: string;
}

export const Wrapper = styled.h1`
    ${({ theme, as, textAlign, size }: WrapperInterface) => css`
        color: ${theme.colors.text};
        font-size: ${as === 'h1' && theme.fontSizes.xl};
        font-size: ${as === 'h2' && theme.fontSizes.md};
        font-size: ${as === 'h3' && theme.fontSizes.sm};

        font-size: ${size === 'small' && theme.fontSizes.sm};
        font-size: ${size === 'medium' && theme.fontSizes.md};
        font-size: ${size === 'big' && theme.fontSizes.xl};
        

        ${textAlign ? `text-align: ${textAlign}` : ''};

        margin: ${theme.spacings[5]} 0;

        
    `}
`;

import styled, { css } from "styled-components";

interface WrapperInterface {
    theme: any;
    as?: string;
    textAlign?: string;
    size?: string;
}

export const Wrapper = styled.h1`
    ${({ as, textAlign, size }: WrapperInterface) => css`
        /* font-size: ${as === "h1" && `larger`};
        font-size: ${as === "h2" && `medium`};
        font-size: ${as === "h3" && `small`};

        font-size: ${size === "small" && `large`};
        font-size: ${size === "medium" && `medium`};
        font-size: ${size === "big" && `small`}; */

        ${textAlign ? `text-align: ${textAlign}` : ""};
    `}
`;

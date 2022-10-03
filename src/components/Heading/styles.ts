import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface WrapperInterface {
    theme: any;
    as?: string;
    textAlign?: string;
    size?: string;
}

export const Wrapper = styled.h1`
    ${({ as, textAlign, size }: WrapperInterface) => css`
        font-size: ${as === "h1" && `1.5rem`};
        font-size: ${as === "h2" && `1.2rem`};
        font-size: ${as === "h3" && `1rem`};

        font-size: ${size === "huge" && `3rem`};
        font-size: ${size === "large" && `2rem`};
        font-size: ${size === "medium" && `1.5rem`};
        font-size: ${size === "small" && `1rem`};

        font-weight: 800;

        ${textAlign ? `text-align: ${textAlign}` : ""};
    `}
`;

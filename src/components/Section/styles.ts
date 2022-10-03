import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
    ${({ theme }) => css`
    min-height: 1000vh;
    display: flex;
    align-items: center;
    justify-content: center;
    `}
`;

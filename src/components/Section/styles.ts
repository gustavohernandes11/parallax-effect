import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
    ${({ theme }) => css`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    `}
`;

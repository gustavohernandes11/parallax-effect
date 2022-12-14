import styled, { css } from "styled-components";
import { motion } from 'framer-motion'

export const Container = styled(motion.main)`
    ${({ theme }) => css`
        position: relative;
    `}
`;

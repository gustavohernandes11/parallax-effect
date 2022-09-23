import styled, { css } from "styled-components";

export const Form = styled.form`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings[4]};
        align-items: center;
        justify-content: center;
        .MuiFormControl-root {
            width: 40%;
        }
    `}
`;

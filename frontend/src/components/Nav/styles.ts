import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
    #nav-buttons {
        padding: ${theme.spacings[4]} 0;
        gap: ${theme.spacings[4]};
        
        color: ${theme.colors.text};
        display: flex;
        flex-direction: row;
        justify-content: space-between:
        align-items: center;

        .MuiButton-root {
            color: ${theme.colors.text};
        }
    }
    #drawer-nav-buttons {
        padding: ${theme.spacings[4]} 0;
        gap: ${theme.spacings[4]};
        display: none;
    }

    @media only screen and (max-width: 600px){
        
            #drawer-nav-buttons {
                display: block;
            }
            #nav-buttons {
                display: none;
            }
    }


        
    `}
`;

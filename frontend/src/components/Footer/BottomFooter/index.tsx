import { Box } from "@mui/material";
export const BottomFooter = ({ children }: any) => {
    return (
        <Box
            p={{
                xs: 2,
                lg: 4,
            }}
            sx={{
                borderTopStyle: '1px solid #fafafa',
                width: "100%",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </Box>
    );
};

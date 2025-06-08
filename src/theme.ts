import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
        h4: {fontWeight: 700},
        h5: {fontWeight: 700},
    },
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#999"
        }
    }
});
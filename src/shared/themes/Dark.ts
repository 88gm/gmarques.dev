import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary:{
            main: red[700],
            dark: red[900],
            light: red[500],
            contrastText: '#fff'
        },
        secondary:{
            main: blue[700],
            dark: blue[900],
            light: blue[500],
            contrastText: '#fff'
        },
        background:{
            default: '#303134',
            paper: '#202124'
        }
    }
});
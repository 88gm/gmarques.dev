import { Paper } from "@mui/material";
import { ReactNode } from "react";

interface MainContainerProps {
    children: ReactNode
}



export const MainContainer = ({ children }: MainContainerProps) => {
    return (
        <Paper>{children}</Paper>
    );
}
import React from 'react';
import Button from "@mui/material/Button";
import {Dayjs} from "dayjs";

type ButtonProps = {
    isDienst: boolean;
    title: string;
    color: "primary" | "secondary" | "success" | "error";
    icon: React.ReactNode;
    onClick: () => void;
    startTime?: Dayjs;
    endTime?: Dayjs;
};

const CustomizedButton: React.FC<ButtonProps> = ({
                                                     title,
                                                     color,
                                                     icon,
                                                     onClick,
                                                     isDienst,
                                                 }) => {
    return (
        <Button variant={isDienst ? "contained" : "outlined"} startIcon={icon} onClick={onClick} color={color}>
            {title}
        </Button>
    );
};

export default CustomizedButton;
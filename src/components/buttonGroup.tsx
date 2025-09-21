import Stack from '@mui/material/Stack';
import AccessAlarmSharpIcon from '@mui/icons-material/AccessAlarmSharp';
import HotelSharpIcon from '@mui/icons-material/HotelSharp';
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';
import WbTwilightSharpIcon from '@mui/icons-material/WbTwilightSharp';
import CustomizedButton from "./customizedButton.tsx";
import NeueVorlagenModal from "./neueVorlagenModal.tsx";
import {useState} from "react";
import {color} from "@mui/system";

type IconLabelButtonsProps = {
    onClick: () => void
};
type ButtonData = {
    title: string;
    color?: "primary" | "secondary" | "success" | "error";
    icon?: React.ReactNode;
    isDienst?: boolean;
};


export default function IconLabelButtons({onClick}: IconLabelButtonsProps) {
 //   const [buttons, setButtons] = useState<ButtonData[]>([
 //       {title: "FD K", icon: <AccessAlarmIcon/>, color: "primary", isDienst: true},
 //   ]);

 //   const handleAddButton = () => {
 //       const newButton: ButtonData = {
 //           title: `Neu ${buttons.length + 1}`,
 //           icon: <AccessAlarmIcon/>,
 //           color: "secondary",
 //           isDienst: true,
 //       };
 //       setButtons((prev) => [...prev, newButton]);
 //   };

    return (
        <>
            <Stack
                sx={{
                    border: '2px solid #20b2aa',
                    padding: '1rem',
                }}>
                <h3>Deine Vorlagen:</h3>
                <Stack
                    sx={{

                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 2,
                    }}
                >



                    <CustomizedButton title="FD K" icon={<AccessAlarmSharpIcon/>} color={"primary"}
                                      onClick={function (): void {
                                          throw new Error("Function not implemented.");
                                      }} isDienst={true}/>
                    <CustomizedButton title="ND K" icon={<HotelSharpIcon/>} color={"primary"}
                                      onClick={function (): void {
                                          throw new Error("Function not implemented.");
                                      }} isDienst={true}/>
                    <CustomizedButton title="SD K" icon={<WbTwilightSharpIcon/>} color={"primary"}
                                      onClick={function (): void {
                                          throw new Error("Function not implemented.");
                                      }} isDienst={true}/>
                    <CustomizedButton title="BD K" icon={<HomeWorkSharpIcon/>} color={"primary"}
                                      onClick={function (): void {
                                          throw new Error("Function not implemented.");
                                      }} isDienst={true}/>

                    <CustomizedButton title="FD AK" icon={<AccessAlarmSharpIcon/>} color="secondary"
                                      onClick={function (): void {
                                          throw new Error("Function not implemented.");
                                      }} isDienst={true}/>
                    <CustomizedButton title="ND AK" icon={<HotelSharpIcon/>} color="secondary"
                                      onClick={function (): void {
                                          throw new Error("Function not implemented.");
                                      }} isDienst={true}/>
                    <CustomizedButton title="SD AK" icon={<WbTwilightSharpIcon/>} color="secondary"
                                      onClick={function (): void {
                                          throw new Error("Function not implemented.");
                                      }} isDienst={true}/>
                    <CustomizedButton title="BD AK" icon={<HomeWorkSharpIcon/>} color="secondary"
                                      isDienst={true} onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}/>
                    <NeueVorlagenModal handleClick={()=>{}}/>
                </Stack>

            </Stack>
        </>
    );
}
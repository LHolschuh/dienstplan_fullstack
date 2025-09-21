import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from "dayjs";
import {TimeField} from "@mui/x-date-pickers";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import {FormControl, FormLabel, InputLabel, MenuItem, Select, type SelectChangeEvent} from "@mui/material";
import AddHomeIcon from '@mui/icons-material/AddHome';
import AodIcon from '@mui/icons-material/Aod';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

type VorlagenProps = {
    handleClick: () => void;
};
const NeueVorlagenModal: React.FC<VorlagenProps>
    = ({
           handleClick,
       }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
    };

    const [icon, setIcon] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setIcon(event.target.value as string);
        console.log(event.target.value as string);
    };


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} startIcon={<AddIcon/>}>
                Neue Vorlage erstellen
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Neue Vorlage erstellen</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth>
                        <form onSubmit={handleSubmit} id="subscription-form">
                            <Stack spacing={2}>
                                <TextField id="outlined-basic" label="Titel" variant="outlined"/>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        label="Startzeit (hh:mm)"
                                        defaultValue={dayjs('2022-04-17T15:30')}
                                        format="HH:mm"
                                    />
                                    <TimeField
                                        label="Endzeit (hh:mm)"
                                        defaultValue={dayjs('2022-04-17T15:30')}
                                        format="HH:mm"
                                    />
                                </LocalizationProvider>
                                <FormLabel component="legend">Farbe auswählen</FormLabel>

                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="blau" control={<Radio color="primary"/>} label="blau"/>
                                    <FormControlLabel value="pink" control={<Radio color="secondary"/>} label="pink"/>
                                </RadioGroup>
                                <InputLabel id="demo-simple-select-label">Icon auswählen</InputLabel>
                                <Select
                                    labelId="icon-wahl-label"
                                    id="icon-wahl"
                                    value={icon}
                                    label="Icon auswählen"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"" + <AddHomeIcon/>}>{<AddHomeIcon/>}</MenuItem>
                                    <MenuItem value={"" + <AodIcon/>}>{<AodIcon/>}</MenuItem>
                                    <MenuItem value={"" + <AirlineSeatReclineExtraIcon/>}>{
                                        <AirlineSeatReclineExtraIcon/>}</MenuItem>
                                </Select>
                            </Stack>
                        </form>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Abbrechen</Button>
                    <Button type="submit" form="subscription-form" onClick={handleClick}>
                        Speichern
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default NeueVorlagenModal;
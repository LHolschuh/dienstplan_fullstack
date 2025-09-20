import * as React from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay, type PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function MultiSelectCalendar() {
    const [selectedDates, setSelectedDates] = React.useState<Dayjs[]>([]);

    const handleDayClick = (date: Dayjs) => {
        const exists = selectedDates.some((d) => d.isSame(date, 'day'));
        if (exists) {
            setSelectedDates(selectedDates.filter((d) => !d.isSame(date, 'day')));
        } else {
            setSelectedDates([...selectedDates, date]);
        }
    };

    const CustomDay = (props: PickersDayProps) => {
        const isSelected = selectedDates.some((d) => d.isSame(props.day, 'day'));
        return (
            <PickersDay
                {...props}
                selected={isSelected}
                onClick={() => handleDayClick(props.day)}
            />
        );
    };

    return (
        <Stack
            sx={{
                border: '2px solid #20b2aa',
                padding: '1rem',
            }}
        >
            <Button variant="outlined" href="#outlined-buttons" startIcon={<DeleteOutlineIcon/>}>
                Kalender zurücksetzen
            </Button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar slots={{ day: CustomDay }} />
            </LocalizationProvider>
            <Button variant="outlined" href="#outlined-buttons" startIcon={<CalendarMonthIcon/>}>
                Zum Google-Kalender hinzufügen
            </Button>
        </Stack>
    );
}
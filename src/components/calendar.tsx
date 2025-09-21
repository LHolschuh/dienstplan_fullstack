import * as React from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay, type PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import Stack from '@mui/material/Stack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CustomizedButton from "./customizedButton.tsx";

interface MultiSelectCalendarProps {
    onClick: () => void,
    customizedButtonOnClick: () => void
}



export default function MultiSelectCalendar({ onClick, customizedButtonOnClick }: MultiSelectCalendarProps) {
    const [selectedDates, setSelectedDates] = React.useState<Dayjs[]>([]);
    function onClickDelete() {
        setSelectedDates([]);
    }
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
            <CustomizedButton isDienst={false} title="Kalender zurücksetzen" color="primary" icon={<DeleteOutlineIcon/>} onClick={onClickDelete}/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar slots={{ day: CustomDay }} />
            </LocalizationProvider>
            <CustomizedButton isDienst={false} title="Zum Google-Kalender hinzufügen" color="primary" icon={<CalendarMonthIcon/>} onClick={customizedButtonOnClick}/>
        </Stack>
    );
}
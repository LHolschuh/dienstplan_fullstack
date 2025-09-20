import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AccessAlarmSharpIcon from '@mui/icons-material/AccessAlarmSharp';
import HotelSharpIcon from '@mui/icons-material/HotelSharp';
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';
import WbTwilightSharpIcon from '@mui/icons-material/WbTwilightSharp';
import AddIcon from '@mui/icons-material/Add';

export default function IconLabelButtons() {
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


                    <Button variant="contained" startIcon={<AccessAlarmSharpIcon/>}>
                        FD K
                    </Button>
                    <Button variant="contained" startIcon={<HotelSharpIcon/>}>
                        ND K
                    </Button>
                    <Button variant="contained" startIcon={<WbTwilightSharpIcon/>}>
                        SD K
                    </Button>
                    <Button variant="contained" startIcon={<HomeWorkSharpIcon/>}>
                        BD K
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<AccessAlarmSharpIcon/>}>
                        FD AK
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<HotelSharpIcon/>}>
                        ND AK
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<WbTwilightSharpIcon/>}>
                        SD AK
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<HomeWorkSharpIcon/>}>
                        BD AK
                    </Button>
                    <Button variant="outlined" href="#outlined-buttons" startIcon={<AddIcon/>}>
                        Hinzufügen
                    </Button>
                </Stack>

            </Stack>
        </>
    );
}
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AllReactorButtons = () => {
    return (
        <>
            <Stack spacing={2} direction="row">
                <Button variant="contained" size="small" color="emergencyButton"
                sx={{
                    color: "#0B3964",
                    fontSize: "12px",
                }}>Emergency Shutdown All</Button>
                <Button variant="contained" size="small" color="regularButton"
                sx={{
                    color: "#0B3964",
                    fontSize: "12px"
                }}>Controlled Shutdown All</Button>
                <Button variant="contained" size="small" color="regularButton"
                sx={{
                    color: "#0B3964",
                    fontSize: "12px"
                }}>
                Enable/Disable all coolants</Button>
            </Stack>
        </>
    )
}

export default AllReactorButtons
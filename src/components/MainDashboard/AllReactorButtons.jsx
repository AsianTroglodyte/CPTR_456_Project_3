import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AllReactorButtons = () => {
    return (
        <>
            <Stack spacing={2} direction="row">
                {/*try to  find a way to make it so that the "color" prop covers the button text coloring by the "sx" prop */}
                <Button variant="contained" size="small" color="emergencyButton" sx={{color:"#FFFFFF"}}>Emergency Shutdown All</Button>
                <Button variant="contained" size="small" color="regularButton" sx={{color:"#0B3964"}}>Controlled Shutdown All</Button>
                <Button variant="contained" size="small" color="regularButton" sx={{color:"#0B3964"}}>Enable/Disable all coolants</Button>
            </Stack>
        </>
    )
}

export default AllReactorButtons
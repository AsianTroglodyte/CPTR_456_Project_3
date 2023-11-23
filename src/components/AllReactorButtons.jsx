import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AllReactorButtons = () => {
    return (
        <>
            <Stack spacing={2} direction="row">
                <Button variant="contained" size="small"
                style={{
                    padding: "3px",
                    backgroundColor: "#E0FF4F",
                    color: "#0B3964"
                }}>Emergency Shutdown All</Button>
                <Button variant="contained" size="small"
                style={{
                    backgroundColor: "#E0FF4F",
                    color: "#0B3964"
                }}>Controlled Shutdown All</Button>
                <Button variant="contained" size="small"
                style={{
                    backgroundColor: "#E0FF4F",
                    color: "#0B3964"
                }}>
                Enable/Disable all coolants</Button>
            </Stack>
        </>
    )
}

export default AllReactorButtons
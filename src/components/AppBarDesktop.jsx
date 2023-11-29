import { AppBar, Typography, Box, Button} from '@mui/material';
const AppBarDesktop = () => {
    return (
        <>
            <AppBar  sx={{
                bgcolor: "#0B3964",
            }}>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent: "space-between", alignContent: "center"}}>
                    <Typography sx={{my: "8px", mx: "16px"}} variant = "h1"> Reactor Simulator </Typography>
                    <Button variant="contained" color="primary" size="small" disableElevation>Reset</Button>
                </Box>
            </AppBar>
        </>
    )
} 

export default AppBarDesktop
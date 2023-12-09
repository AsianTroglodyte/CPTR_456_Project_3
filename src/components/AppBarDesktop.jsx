import { AppBar, Typography, Box, Button} from '@mui/material';
const AppBarDesktop = ({ setReactors}) => {

    const handleReset = async () => {
        console.log('Reset')
            await fetch(`https://nuclear.dacoder.io/reactors/reset/?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST',

            })
            setReactors([])
        }
    
    return (
        <>
            <AppBar  sx={{
                bgcolor: "#0B3964",
            }}>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent: "space-between", alignContent: "center"}}>
                    <Typography sx={{my: "8px", mx: "16px"}} variant = "h1"> Reactor Simulator </Typography>
                    <Button onClick={handleReset} variant="contained" color="primary" size="small" disableElevation>Reset Reactors</Button>
                </Box>
            </AppBar>
        </>
    )
} 

export default AppBarDesktop
import { AppBar, Typography} from '@mui/material';
const AppBarDesktop = () => {
    return (
        <>
            <AppBar  sx={{
                bgcolor: "#0B3964",
            }}>
                <Typography sx={{
                margin: "8px"
            }}>
                Reactor Simulator
                </Typography>
            </AppBar>
        </>
    )
} 

export default AppBarDesktop
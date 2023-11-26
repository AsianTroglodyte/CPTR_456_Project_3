import { AppBar, Typography} from '@mui/material';
const AppBarDesktop = () => {
    return (
        <>
            <AppBar  sx={{
                bgcolor: "#0B3964",
            }}>
                <Typography sx={{
                my: "8px",
                mx: "16px",

            }}
            variant = "h1"
            >
                Reactor Simulator
                </Typography>
            </AppBar>
        </>
    )
} 

export default AppBarDesktop
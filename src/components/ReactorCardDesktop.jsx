import { Paper } from '@mui/material';

const ReactorCardDesktop = (props) => {
    const {reactorName, reactorState} = props

    return (
        <>
            <Paper sx={{
                width: "120px",
                height: "120px",
                padding: "10px",
                color: "#0B3964"
                // backgroundColor: "green"
            }}
                elevation={3}
            >
                bruh momento
            </Paper>
        </>
    )
}

export default ReactorCardDesktop
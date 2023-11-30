import { Typography } from "@mui/material"
import Paper from "@mui/material/Paper"

const ReactorTempGraph = () => {
    return (
        <>
            <Paper variant="elevation" elevation={3}>
                <Typography variant="h3" color="primary"> Reactor State: offline for refuelling </Typography>
            </Paper>
        </>
    )
}

export default ReactorTempGraph
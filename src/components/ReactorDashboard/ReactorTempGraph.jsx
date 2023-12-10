import { Typography } from "@mui/material"
import Paper from "@mui/material/Paper"

const ReactorTempGraph = (props) => {
    // const {reactorState} = props
    return (
        <>
            <Paper variant="elevation" elevation={3}>
                <Typography variant="h3" color="primary"> Reactor State:  </Typography>
            </Paper>
        </>
    )
}

export default ReactorTempGraph
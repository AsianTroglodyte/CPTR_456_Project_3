import Paper from "@mui/material/Paper"
import AllReactorTempGraph from "./AllReactorTempGraph"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"

const AllReactorInfo = (props) =>{
    const {reactors} = props
    return (
    <>
        <Stack direction="column" alignItems="center" spacing={3}>
            <AllReactorTempGraph />

            <Stack direction="row" spacing={5} justifyContent="center">
                {/*Try finding a way remove the need for the "sx" props*/}
                <Paper sx={{p:"15px", color:"#0B3964"}}>
                    <Typography display="block" variant="h3">Total Energy Output</Typography>
                    <Typography display="block" variant="aggregateInfo"> 200 </Typography>
                </Paper>
                <Paper sx={{p:"15px", color:"#0B3964"}}>
                    <Typography display="block" variant="h3">Average Reactor Temperature</Typography>
                    <Typography display="block" variant="aggregateInfo">100 C</Typography>
                </Paper>
            </Stack>
        </Stack>
    </>
    )
}

export default AllReactorInfo
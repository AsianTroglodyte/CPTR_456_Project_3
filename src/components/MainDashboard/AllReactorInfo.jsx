import Paper from "@mui/material/Paper"
import AllReactorTempGraph from "./AllReactorTempGraph"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import { useState, useEffect} from "react";

const AllReactorInfo = (props) =>{
    const { totalOutput, avgTemp} = props
    return (
    <>
        <Stack direction="column" alignItems="center" spacing={3}>
            <AllReactorTempGraph />

            <Stack direction="row" spacing={5} justifyContent="center">
                {/*Try finding a way remove the need for the "sx" props*/}
                <Paper sx={{p:"15px", color:"#0B3964"}}>
                    <Typography display="block" variant="h3">Total Energy Output</Typography>
                    <Typography display="block" variant="aggregateInfo"> {Number(totalOutput / 1000).toFixed(2)} GW</Typography>
                </Paper>
                <Paper sx={{p:"15px", color:"#0B3964"}}>
                    <Typography display="block" variant="h3">Average Reactor Temperature</Typography>
                    <Typography display="block" variant="aggregateInfo"> { Number(avgTemp).toFixed(2)}</Typography>
                </Paper>
            </Stack>
        </Stack>
    </>
    )
}

export default AllReactorInfo
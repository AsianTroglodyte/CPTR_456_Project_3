import Paper from "@mui/material/Paper"
import AllReactorTempGraph from "./AllReactorTempGraph"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"

const AllReactorInfo = () =>{
    return (
    <>
        <Stack
        direction="column"
        alignItems="center"
        spacing={3}>
            <AllReactorTempGraph />

            <Stack direction="row" spacing={5} justifyContent="center">
                <Paper sx={{
                    p: "15px",
                    color: "#0B3964"
                }}
                elevation={3}
                >
                    <Typography>
                        Total Energy Output
                    </Typography>
                    <Typography>
                        100 GW
                    </Typography>
                </Paper>
                <Paper sx={{
                    p: "15px",
                    color: "#0B3964"
                }}
                elevation={3}
                >
                    <Typography>
                        Average Reactor Temperature
                    </Typography>
                    <Typography>
                        100C
                    </Typography>
                </Paper>
            </Stack>
        </Stack>
    </>
    )
}

export default AllReactorInfo
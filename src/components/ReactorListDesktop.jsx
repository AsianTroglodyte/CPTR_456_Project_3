import { useState } from "react";
import ReactorCardDesktop from "./ReactorCardDesktop"
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";

const ReactorListDesktop = () => {
    const [reactorState, setReactorState] = useState("safe")
    
    return (
        <>
            <Stack 
            direction= "column"
            spacing={1}
            alignContent="center"
            >
                <Typography sx={{color: "#0B3964"}}> All Reactors</Typography>
                <ReactorCardDesktop reactorName = {"Reactor 1"}/>
                <ReactorCardDesktop reactorName = {"Reactor 2"}/>
                <ReactorCardDesktop reactorName = {"Reactor 3"}/>
            </Stack>
        </>
    )
}

export default ReactorListDesktop
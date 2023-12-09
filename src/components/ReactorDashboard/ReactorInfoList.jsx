import { useState, useEffect } from "react";
import ReactorCardDesktop from "../MainDashboard/ReactorCardDesktop"
import { Stack, Typography, Box, Card, CardActionArea, CardHeader, CardContent, Button, CardActions, InputBase, TextField} from "@mui/material";

import FuelInjectorCard from "./ReactorDashBoardCards.jsx/FuelInjectorCard";
import PowerOutputCard from "./ReactorDashBoardCards.jsx/PowerOutputCard";
import RodStateCard from "./ReactorDashBoardCards.jsx/RodStateCard";
import ShutdownCard from "./ReactorDashBoardCards.jsx/ShutdownCard";
import TempCoolantCard from "./ReactorDashBoardCards.jsx/TempCoolantCard";

const ReactorInfoList = () => {

    return (
        <>
        <Stack
        direction= "column"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        minWidth= "250px"
        >
        {/*using Input Base instead of a text field component because the text field component
        did not fit the style we were going for*/}
        <InputBase 
            input="text" 
            required={true} 
            variant="filled"
            // value="This Reactor" 
            sx={{fontSize: "24px", 
                color: "#0B3964", 
                maxWidth: "200px", 
                overflow: "hidden", 
                // width: `${inputWidth}px`
            }} 
        />
        {/* <Typography variant="h2"> This Reactor</Typography> */}
            <Stack 
            minWidth= "250px"
            alignItems= "center"
            direction= "column"
            spacing={1}
            pb={5}
            pt={1}
            maxHeight={"65vh"}
            overflow={"auto"}
            >
                <FuelInjectorCard />

                <PowerOutputCard />

                <RodStateCard />

                <ShutdownCard />

                <TempCoolantCard />
                
            </Stack>
        </Stack>

        </>
    )
}

export default ReactorInfoList
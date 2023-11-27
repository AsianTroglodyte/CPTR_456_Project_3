import { useState } from "react";
import ReactorCardDesktop from "./ReactorCardDesktop"
import { Stack, Typography, createTheme, ThemeProvider, Box, InputBase} from "@mui/material";


const ReactorListDesktop = () => {
    return (
        <>
        <Stack
        direction= "column"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        minWidth= "250px"
        >
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
                {/*1. amount of card temporary. exists to ensure that scrolling works */}
                <ReactorCardDesktop reactorName = {"Reactor 1"} temperature = {"Safe"}/>
                <ReactorCardDesktop reactorName = {"Reactor 2"} temperature = {"Warning"}/>
                <ReactorCardDesktop reactorName = {"Reactor 3"} temperature = {"Danger"}/>
                <ReactorCardDesktop reactorName = {"Reactor 4"} temperature = {"Meltdown"}/>
                <ReactorCardDesktop reactorName = {"Reactor 5"} temperature = {"Safe"}/>
                <ReactorCardDesktop reactorName = {"Reactor 6"} temperature = {"Danger"}/>
                <ReactorCardDesktop reactorName = {"Reactor 7"} temperature = {"Safe"}/>
                <ReactorCardDesktop reactorName = {"Reactor 8"} temperature = {"Warning"}/>
                <ReactorCardDesktop reactorName = {"Reactor 9"} temperature = {"Meltdown"}/>
            </Stack>
        </Stack>

        </>
    )
}

export default ReactorListDesktop
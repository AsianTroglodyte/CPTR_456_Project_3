import { useState } from "react";
import ReactorCardDesktop from "./ReactorCardDesktop"
import { Stack, Typography, createTheme, ThemeProvider, Box} from "@mui/material";


const ReactorListDesktop = (props) => {
    const {reactors} = props
    return (
        <>
        <Stack
        direction= "column"
        spacing={1}
        alignItems="center"
        minWidth= "250px"
        >
            <Typography variant="h2" color="primary"> All Reactors</Typography>
            
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
                {/*1. amount of card temporary. exists to ensure that scrolling works*/
                reactors.map((reactor) => {
                    return <ReactorCardDesktop 
                                reactorName = {reactor.name} 
                                reactorTempStatus = {reactor.temperature.status} 
                                reactorID = {reactor.id} 
                                key = {reactor.id} 
                            />
                })
                }
            </Stack>
        </Stack>

        </>
    )
}

export default ReactorListDesktop
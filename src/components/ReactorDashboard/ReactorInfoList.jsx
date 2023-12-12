import { useState, useEffect } from "react";
import ReactorCardDesktop from "../MainDashboard/ReactorCardDesktop"
import { Stack, Typography, Box, Card, CardActionArea, CardHeader, CardContent, Button, CardActions, InputBase, TextField} from "@mui/material";

import FuelInjectorCard from "./ReactorDashBoardCards.jsx/FuelInjectorCard";
import PowerOutputCard from "./ReactorDashBoardCards.jsx/PowerOutputCard";
import RodStateCard from "./ReactorDashBoardCards.jsx/RodStateCard";
import ShutdownCard from "./ReactorDashBoardCards.jsx/ShutdownCard";
import TempCoolantCard from "./ReactorDashBoardCards.jsx/TempCoolantCard";
import { useParams } from "react-router-dom";

const ReactorInfoList = (props) => {
    const {reactors, setReactors} = props

    const [reactorName, setReactorName] = useState("Reactor 1")
    // console.log("curReactorData: ", curReactorData)


    const changeReactorName = (event, val) => {
        setReactorName(event.target.value)

        serverChangeCoolant(event.target.value)
    }

    const serverChangeCoolant = async (newReactorName) => {
        await fetch(`https://nuclear.dacoder.io/reactors/set-reactor-name/{id}${curReactorData.id}?apiKey=892598c5362642d2`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
            ,
            body: JSON.stringify(
                {
                    "name": newReactorName
                }
            )
        })
        console.log("Reactor Name: ", newReactorName)
    }

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
            value={reactorName}
            onChange={(event, val) => changeReactorName(event)}
            // value="This Reactor" 
            sx={{fontSize: "24px", 
                color: "#0B3964", 
                maxWidth: "200px", 
                overflow: "hidden", 
                // width: `${inputWidth}px`
            }} 
        >
        </InputBase>
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
                <FuelInjectorCard setReactors={setReactors} reactors={reactors}/>

                <PowerOutputCard reactors={reactors}/>

                <RodStateCard setReactors={setReactors} reactors={reactors}/>

                <ShutdownCard setReactors={setReactors} reactors={reactors}/>

                <TempCoolantCard setReactors={setReactors} reactors={reactors}/>
                
            </Stack>
        </Stack>

        </>
    )
}

export default ReactorInfoList
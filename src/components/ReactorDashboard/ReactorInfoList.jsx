import { useState, useEffect } from "react";
import ReactorCardDesktop from "../MainDashboard/ReactorCardDesktop"
import { Stack, Typography, Box, Card, CardActionArea, CardHeader, CardContent, Button, CardActions, InputBase, TextField} from "@mui/material";

import FuelInjectorCard from "./ReactorDashBoardCards.jsx/FuelInjectorCard";
import PowerOutputCard from "./ReactorDashBoardCards.jsx/PowerOutputCard";
import RodStateCard from "./ReactorDashBoardCards.jsx/RodStateCard";
import ShutdownCard from "./ReactorDashBoardCards.jsx/ShutdownCard";
import TempCoolantCard from "./ReactorDashBoardCards.jsx/TempCoolantCard";
import { useParams } from "react-router-dom";
import StartupCard from "./ReactorDashBoardCards.jsx/StartupCard";

const ReactorInfoList = (props) => {
    const {reactors, setReactors} = props
    const [reactorName, setReactorName] = useState("loading...")
    // the FuelInjectorCard changes the amount of Rods lowered in the RodStateCard Thus the state must be declared here
    const [rodsLowered, setRodsLowered] = useState(0)

    const {id} = useParams()

    // immediately getting the amount of Rods
    useEffect( () => {
        const fetchData = async () => {
            const rawData = await fetch(`https://nuclear.dacoder.io/reactors/rod-state/${id}?apiKey=b9d10dcab8f4dd45`)
            const jsonData = await rawData.json()
            setRodsLowered(jsonData.control_rods.in)
            console.log("rods", JSON.stringify(jsonData.control_rods.in))
        }
        fetchData()
    },[])

    const changeReactorName = (event, val) => {
        setReactorName(event.target.value)
        serverChangeName()
    }

    const serverChangeName = async () => {
        await fetch(`https://nuclear.dacoder.io/reactors/set-reactor-name/${id}?apiKey=892598c5362642d2`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
            ,
            body: JSON.stringify(
                {
                    name: reactorName
                }
            )
        })
        console.log("Reactor Name: ", reactorName)
    }

    // getting the name of the 
    useEffect( () => {
        const fetchData = async () => {
            const rawData = await fetch(`https://nuclear.dacoder.io/reactors/?apiKey=892598c5362642d2`)
            const jsonData = await rawData.json()
            console.log("rods", JSON.stringify(jsonData))
        }
    },[])



    // let updatedReactorName = (reactors.length != 0? " " + reactors.find((reactor) => reactor.id === id).name : "loading")
    // setReactorName(updatedReactorName)

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

                <StartupCard />

                <ShutdownCard setReactors={setReactors} reactors={reactors}/>

                <FuelInjectorCard rodsLowered={rodsLowered} setRodsLowered={setRodsLowered} setReactors={setReactors} reactors={reactors}/>

                <PowerOutputCard reactors={reactors}/>

                <RodStateCard rodsLowered={rodsLowered} setRodsLowered={setRodsLowered} setReactors={setReactors} reactors={reactors}/>

                <TempCoolantCard setReactors={setReactors} reactors={reactors}/>
                
            </Stack>
        </Stack>

        </>
    )
}

export default ReactorInfoList
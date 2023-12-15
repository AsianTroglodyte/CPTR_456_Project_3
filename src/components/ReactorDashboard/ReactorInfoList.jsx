import { useState, useEffect } from "react";
import { Stack, InputBase} from "@mui/material";

import FuelInjectorCard from "./ReactorDashBoardCards.jsx/FuelInjectorCard";
import PowerOutputCard from "./ReactorDashBoardCards.jsx/PowerOutputCard";
import RodStateCard from "./ReactorDashBoardCards.jsx/RodStateCard";
import ShutdownCard from "./ReactorDashBoardCards.jsx/ShutdownCard";
import TempCoolantCard from "./ReactorDashBoardCards.jsx/TempCoolantCard";
import { useParams } from "react-router-dom";
import StartupCard from "./ReactorDashBoardCards.jsx/StartupCard";

const ReactorInfoList = (props) => {
    const {tempData, coolantData, outputData, reactorStateData, fuelLevelData, rodStateData, reactors} = props
    const [reactorName, setReactorName] = useState("loading...")
    // the FuelInjectorCard changes the amount of Rods lowered in the RodStateCard. Thus the state must be declared here
    const [rodsLowered, setRodsLowered] = useState(0)

    const {id} = useParams()

    // immediately getting the amount of Rods
    useEffect( () => {
        const fetchData = async () => {
            const rawRodsData = await fetch(`https://nuclear.dacoder.io/reactors/rod-state/${id}?apiKey=b9d10dcab8f4dd45`)
            const rodsJsonData = await rawRodsData.json()

            const rawReactorsData = await fetch(`https://nuclear.dacoder.io/reactors/?apiKey=b9d10dcab8f4dd45`)
            const reactorsJsonData = await rawReactorsData.json()

            const initialReactorName = reactorsJsonData.reactors.find((reactor) => reactor.id == id).name
            setReactorName(initialReactorName)
            console.log(reactorName)

            setRodsLowered(rodsJsonData.control_rods.in)
            // console.log("rods", JSON.stringify(jsonData.control_rods.in))
        }
        fetchData()
    },[])

    const changeReactorName = (event, val) => {
        setReactorName(event.target.value)
        serverChangeName(event.target.value)
    }

    const serverChangeName = async (newName) => {
        console.log("Reactor Name: ", newName)
        await fetch(`https://nuclear.dacoder.io/reactors/set-reactor-name/${id}?apiKey=b9d10dcab8f4dd45`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "name": newName
                }
            )
        })
        console.log("Reactor Name: ", newName)
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
            onChange={(event) => changeReactorName(event)}
            sx={{fontSize: "24px", 
                color: "#0B3964", 
                maxWidth: "200px", 
                overflow: "hidden", 
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

                <ShutdownCard reactors={reactors} reactorStateData={reactorStateData}/>

                <FuelInjectorCard rodsLowered={rodsLowered} setRodsLowered={setRodsLowered} fuelLevelData={fuelLevelData} reactors={reactors} reactorStateData={reactorStateData}/>

                <PowerOutputCard outputData={outputData} reactorStateData={reactorStateData}/>

                <RodStateCard rodsLowered={rodsLowered} setRodsLowered={setRodsLowered} reactors={reactors} reactorStateData={reactorStateData}/>

                <TempCoolantCard tempData={tempData} coolantData={coolantData} reactors={reactors}/>
                
            </Stack>
        </Stack>

        </>
    )
}

export default ReactorInfoList
import { Stack, Divider, Container, Box} from "@mui/material";
import ReactorInfoList from "./ReactorInfoList"
import ReactorTempGraph from "./ReactorTempGraph";
import AppBarIndividualDashboardDesktop from "../AppBarIndividualDashboardDesktop";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const ReactorDashboard = (props) => {
    const {reactors, tempsLists} = props
    const {id} = useParams() 
    const [tempData, setTempData] = useState()
    const [genericReactorData, setGenericReactorData] = useState()
    const [coolantData, setCoolantData] = useState()
    const [outputData, setOutpuData] = useState()
    const [fuelLevelData, setFuelLevelData] = useState()
    const [reactorStateData, setReactorStateData] = useState()
    const [rodStateData, setRodStateData] = useState()
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            const rawData = await fetch("https://nuclear.dacoder.io/reactors?apiKey=b9d10dcab8f4dd45")
            const newRawData = await rawData.json() 
        
            const rawTempData = await fetch(`https://nuclear.dacoder.io/reactors/temperature/${id}?apiKey=b9d10dcab8f4dd45`)
            const newTempData = await rawTempData.json()
            setTempData(newTempData)

            const rawCoolantData = await fetch(`https://nuclear.dacoder.io/reactors/coolant/${id}?apiKey=b9d10dcab8f4dd45`)
            setCoolantData(await rawCoolantData.json())

            const rawOutputData = await fetch(`https://nuclear.dacoder.io/reactors/output/${id}?apiKey=b9d10dcab8f4dd45`)
            setOutpuData(await rawOutputData.json())

            const rawFuelLevel = await fetch(`https://nuclear.dacoder.io/reactors/fuel-level/${id}?apiKey=b9d10dcab8f4dd45`)
            setFuelLevelData(await rawFuelLevel.json())

            const rawReactorState = await fetch(`https://nuclear.dacoder.io/reactors/reactor-state/${id}?apiKey=b9d10dcab8f4dd45`)
            setReactorStateData(await rawReactorState.json())

            const rawRodState = await fetch(`https://nuclear.dacoder.io/reactors/rod-state/${id}?apiKey=b9d10dcab8f4dd45`)
            setRodStateData(await rawRodState.json())

            
            setGraphData(prevGraphData => {
                let newTempAmount = newTempData.temperature.amount;
                let newGraphData = [...prevGraphData, newTempAmount];

                if (newGraphData.length > 600) {
                    newGraphData = newGraphData.slice(-600)
                    return newGraphData
                } 
                else if (newGraphData.length == 0){
                    newGraphData = [newTempAmount]
                } else {
                    newGraphData = [...prevGraphData, newTempAmount]
                }
                return (newGraphData)
            })

        }

        const interval = setInterval(fetchData, 500)
    
        return () => clearInterval(interval)
    
    }, [])
    

    return (
        <>
        {/*The purpose of the Container MUI layout we are using to basically create "canvas" for us
        to work with*/}
        <AppBarIndividualDashboardDesktop />
            <Container>                    
                <Stack 
                    direction="row" 
                    justifyContent="center"
                    spacing={4} 
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{mt:"80px"}}
                    >
                        <ReactorInfoList 
                            genericReactorData={genericReactorData}
                            tempData={tempData} 
                            coolantData={coolantData} 
                            outputData={outputData} 
                            reactorStateData={reactorStateData}
                            fuelLevelData={fuelLevelData}
                            rodStateData={rodStateData}
                            reactors={reactors}
                            />
                        <ReactorTempGraph graphData={graphData} genericReactorData={genericReactorData} reactorStateData={reactorStateData}/>
                    </Stack>
            </Container>
        </>
    )
}

export default ReactorDashboard
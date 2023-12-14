import { Stack, Divider, Container, Box } from "@mui/material";
import AllReactorButtons from "./AllReactorButtons"
import AllReactorInfo from "./AllReactorInfo"
import AllReactorListDesktop from "./AllReactorListDesktop";
import AllReactorTempGraph from "./AllReactorTempGraph";
import AppBarMaindashboardDesktop from "../AppBarMaindashboardDesktop";
import { useState, useEffect } from "react";

const MainDashboard = (props) => {
    const { plantName } = props
    const [reactors, setReactors] = useState([])
    //const [plantName, setPlantName] = useState("")
    const [averageTemperature, setAvgTemps] = useState(0)
    const [totalOutput, setTotalOutput] = useState(0)

    //useParam
    useEffect(() => {
        const fetchData = async () => {
            const rawData = await fetch("https://nuclear.dacoder.io/reactors?apiKey=b9d10dcab8f4dd45")
            const jsonData = await rawData.json()

            const jsonReactors = await Promise.all(jsonData.reactors.map(async (reactor) => {
                const rawTempData = await fetch(`https://nuclear.dacoder.io/reactors/temperature/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
                const tempData = await rawTempData.json()

                const rawCoolantData = await fetch(`https://nuclear.dacoder.io/reactors/coolant/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
                const coolantData = await rawCoolantData.json()

                const rawOutputData = await fetch(`https://nuclear.dacoder.io/reactors/output/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
                const outputData = await rawOutputData.json()

                const rawFuelLevel = await fetch(`https://nuclear.dacoder.io/reactors/fuel-level/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
                const fuelLevelData = await rawFuelLevel.json()

                const rawReactorState = await fetch(`https://nuclear.dacoder.io/reactors/reactor-state/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
                const reactorStateData = await rawReactorState.json()

                const rawRodState = await fetch(`https://nuclear.dacoder.io/reactors/rod-state/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
                const rodStateData = await rawRodState.json()

                


                return {
                    ...reactor,
                    temperature: tempData.temperature,
                    coolant: coolantData.coolant,
                    output: outputData.output,
                    fuelLevel: fuelLevelData.fuel,
                    reactorState: reactorStateData.state,
                    rodState: rodStateData.control_rods
                }
            }))
            const totalOutputValue = jsonReactors.reduce((accumulator, reactor) => {
                const reactorOutput = reactor.output.amount || 0
                return accumulator + reactorOutput
            }, 0)
            setTotalOutput(totalOutputValue)


            const totalTemperature = jsonReactors.reduce((accumulator, reactor) => {
                const reactorTemperature = reactor.temperature.amount || 0
                return accumulator + reactorTemperature
            }, 0)
            const averageTemperature = jsonReactors.length > 0 ? totalTemperature / jsonReactors.length : 0
            setAvgTemps(averageTemperature)
        
            setReactors(jsonReactors)

        }

        const interval = setInterval(fetchData, 300)

        return () => clearInterval(interval)

    }, [])
    return (
        <>
            {/*The purpose of the Container MUI layout we are using to basically create "canvas" for us
        to work with*/}
            <AppBarMaindashboardDesktop />
            <Container>
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={4}
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{ mt: "80px" }}
                >
                    <p>{plantName}</p>
                    <AllReactorListDesktop reactors={reactors}/>

                    <Stack direction="column" alignItems="center" spacing={2}>
                        <AllReactorButtons reactors={reactors} />
                        <AllReactorInfo totalOutput={totalOutput} setTotalOutput={setTotalOutput} averageTemperature={averageTemperature}/>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default MainDashboard
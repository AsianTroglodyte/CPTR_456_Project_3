import { Stack, Divider, Container, Box, Typography, InputBase } from "@mui/material";
import AllReactorButtons from "./AllReactorButtons"
import AllReactorInfo from "./AllReactorInfo"
import AllReactorListDesktop from "./AllReactorListDesktop";
import AllReactorTempGraph from "./AllReactorTempGraph";
import AppBarMaindashboardDesktop from "../AppBarMaindashboardDesktop";
import { useState, useEffect } from "react";

const MainDashboard = (props) => {
    const {reactors, plant_name, avgTemp, avgTemps, totalOutput} = props
    const [plantName, setPlantName] = useState("loading...")

    // const useDebounce = (value, delay) => {
    //     const [debouncedvalue, setDebouncedValue] = useState(value)

    //     useEffect(() => {
    //         const id = setTimout(() => {
    //             setDebouncedValue(value)

    //         }, delay)

    //         return () => {
    //             clearTimeout(id)
    //         }
    //     }, [value, delay])
    // return debouncedvalue
    // }

    // const debouncedServerChange = usede(serve(rChangeName(plantName), 300)

    // const changePlantName = (event, val) => {
    //     setPlantName(event.target.value)
    // }

    useEffect( () => {
        const fetchData = async () => {
            const rawReactorsData = await fetch(`https://nuclear.dacoder.io/reactors/?apiKey=b9d10dcab8f4dd45`)
            const reactorsJsonData = await rawReactorsData.json()

            const initialReactorName = reactorsJsonData.plant_name
            setPlantName(initialReactorName)
        }
        fetchData()
    },[])

    const changePlantName = (event) => {
        setPlantName(event.target.value)
        serverChangeName(event.target.value)
    }
    const serverChangeName = async (newName) => {
        console.log("Reactor Name: ", newName)
        await fetch(`https://nuclear.dacoder.io/reactors/plant-name/?apiKey=b9d10dcab8f4dd45`, {
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

    useEffect( () => {
        const fetchData = async () => {
            const rawData = await fetch(`https://nuclear.dacoder.io/reactors/?apiKey=b9d10dcab8f4dd45`)
            const jsonData = await rawData.json()
            console.log("rods", JSON.stringify(jsonData))
        }
    },[])

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
                    <AllReactorListDesktop reactors={reactors}/>

                    <Stack direction="column" alignItems="center" spacing={2}>
                        <InputBase 
                            input="text" 
                            required={true} 
                            variant="filled"
                            value={plantName}
                            onChange={(event) => changePlantName(event)}
                            sx={{fontSize: "24px", 
                                color: "#0B3964", 
                                overflow: "hidden", 
                            }} 
                        >
                        </InputBase>
                        <AllReactorButtons reactors={reactors} />
                        <AllReactorTempGraph reactors={reactors} avgTemps={avgTemps}/>
                        <AllReactorInfo totalOutput={totalOutput} avgTemp={avgTemp}/>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default MainDashboard
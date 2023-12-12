import {Card, CardHeader, TextField, Typography, FormControlLabel} from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RodStateCard = (props) => {
    const {reactors, setReactors} = props
    const {id} = useParams()
    const [rodsLowered, setRodsLowered] = useState()

    // useEffect( () => {
    //     async function fetchMyAPI() {
    //         let rawRodData = await fetch(`https://nuclear.dacoder.io/reactors/rod-state/${id}?apiKey=892598c5362642d2`)
    //         let rodData = await rawRodData.json()
    //         console.log("rods lowered: ", rodData.out)
    //         setRodsLowered(rodData.out)
    //     }

    //     fetchMyAPI()
    // },[])

    useEffect( () => {
        fetch(`https://nuclear.dacoder.io/reactors/rod-state/${id}?apiKey=892598c5362642d2`)
            .then((rawRodData) => rawRodData.json())
            .then((data) => rodsLowered(data))

    },[])
    
    // useEffect(async () => {

    // })
    // const fetchData = async () => {
    //     const rawData = await fetch("https://nuclear.dacoder.io/reactors?apiKey=b9d10dcab8f4dd45")
    //     const jsonData = await rawData.json()

    //     setPlantName(jsonData.plant_name)
        
    //     const jsonRodsData = await Promise.all(jsonData.reactors.map(async (reactor) => {

    //         return {
                
    //         }
    //     }))
        
    //     setAvgTemps(averageTemperature)
    //     setReactors(jsonReactorsData)                          
    // }

    const changeRodsRaised = (event) => {
        setRodsRaised(event.target.value)
        // handleRodState(event.target.value)
    }

    // const handleRodState = async (rodsRaised) => {
    //     console.log("current reactor ID: ", curReactorData.id, "\n rods in: ", rodsRaised)
    //     await fetch(`https://nuclear.dacoder.io/reactors/raise-rod/${curReactorData.id}?apiKey=892598c5362642d2`, {
    //         method: "POST"
    //     })
    // }
        // await fetch(`https://nuclear.dacoder.io/reactors/drop-rod/${curReactorData.id}?apiKey=892598c5362642d2`, {
        // method: "POST",
        // headers: {
        //     "Accept": "application/json",
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(
        //     {
        //         rodsRaised
        //         // "rodState": {
        //         //     "in": rodsRaised,
        //         //     "out": 300 - rodsRaised
        //         // }
        //     }
        // )
        // })

        // const jsonData = await rawData.json()
        // setRodState(rawData)
    // }
    // setReactors(reactors.length != 0? reactors.find((reactor) => reactor.id === id).rodState.in : 0)

    return (
        <Card sx={{
            width: "230px",
            minHeight: "140px",
            backgroundColor: "#FFFFFFF",
            color: "#0B3964"
        }}
        elevation={3}
        >
            <CardHeader 
                title={"Rod State"} 
                sx={{fontWeight: "Medium", mx: "8"}} 
                titleTypographyProps={{variant:'h3' }}/>
                {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
                    <FormControlLabel 
                        control={<TextField 
                            type="number" 
                            size="small" 
                            color="primary" 
                            value={rodsLowered} 
                            label="Rods"
                            id="filled-number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            onChange={(event)=> {changeRodsRaised(event)}}
                            inputProps={{min:0, max:250, maxstep:1}}
                            // The margin left styling is a bit strange indeed
                            // the positioning of the label is very off for some reason
                            sx={{width: "80px", height: "20px", ml: "28px"}}/>}
                            sx={{mr:"5px"}}>
                    </FormControlLabel>
                    <Typography variant="basicInfo" sx= {{position: "relative", top: "23px"}}>/300</Typography>
                    <Typography variant="basicInfo" sx= {{display: "block", mt:"35px", mx:"16px"}}>{typeof curReactorData == 'undefined'? 'loading' : "raised"}</Typography>
            {/* <Typography variant="basicInfo" sx={{px:"15px"}}> are raised</Typography> */}
        </Card>
    )
}

export default RodStateCard
import {Card, CardHeader, TextField, Typography, FormControlLabel} from "@mui/material"
import { useState } from "react"

const RodStateCard = (props) => {
    const {curReactorData, setReactors} = props
    const [rodState, setRodState] = useState(25)

    const changeRodsRaised = (event) => {
        setRodState(event.target.value)
        handleRodState(event.target.value)
    }

    const handleRodState = async (rodsRaised) => {
        console.log("current reactor ID: ", curReactorData.id, "\n rods in: ", rodsRaised)
        // await fetch(`https://nuclear.dacoder.io/reactors/raise-rod/${curReactorData.id}?apiKey=892598c5362642d2`, {
            
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(
        //         {
        //             "rodState": {
        //                 "in": rodsRaised,
        //                 "out": 300 - rodsRaised
        //             }
        //         }
        //     )
        // })

        await fetch(`https://nuclear.dacoder.io/reactors/drop-rod/${curReactorData.id}?apiKey=892598c5362642d2`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                rodsRaised
                // "rodState": {
                //     "in": rodsRaised,
                //     "out": 300 - rodsRaised
                // }
            }
        )
        })

        // const jsonData = await rawData.json()
        // setRodState(rawData)
    }

    return (
        <Card sx={{
            width: "200px",
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
                            value={rodState} 
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
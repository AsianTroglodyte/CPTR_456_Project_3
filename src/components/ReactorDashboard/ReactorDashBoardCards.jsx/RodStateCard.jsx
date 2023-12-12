import {Card, CardHeader, TextField, Typography, FormControlLabel} from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RodStateCard = (props) => {
    const {rodsLowered, setRodsLowered} = props
    const {id} = useParams()
    

    const changeRodsLowered = (event) => {
        if (rodsLowered > event.target.value) {
            decrementRodsLowered()
        }
        else if (rodsLowered < event.target.value) {
            incrementRodsLowered()
        }
        setRodsLowered(event.target.value)
        // handleRodState(event.target.value)
    }

    const incrementRodsLowered = async () => {
        console.log('incrementRodsLowered: ', id)
        await fetch(`https://nuclear.dacoder.io/reactors/drop-rod/${id}?apiKey=b9d10dcab8f4dd45`, {
            method: 'POST',
        })
    }

    const decrementRodsLowered = async () => {
        console.log('decrementRodsLowered: ', id)
        await fetch(`https://nuclear.dacoder.io/reactors/raise-rod/${id}?apiKey=b9d10dcab8f4dd45`, {
            method: 'POST',
        })
    }

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
                            onChange={(event)=> {changeRodsLowered(event)}}
                            inputProps={{min:0, max:250, maxstep:1}}
                            // The margin left styling is a bit strange indeed
                            // the positioning of the label is very off for some reason
                            sx={{width: "80px", height: "20px", ml: "28px"}}/>}
                            sx={{mr:"5px"}}>
                    </FormControlLabel>
                    <Typography variant="basicInfo" sx= {{position: "relative", top: "23px"}}>/300</Typography>
                    <Typography variant="basicInfo" sx= {{display: "block", mt:"35px", mx:"16px"}}>
                        lowered
                        {/* {reactors.length != 0? "lowered" : "loading"} */}
                    </Typography>
            {/* <Typography variant="basicInfo" sx={{px:"15px"}}> are raised</Typography> */}
        </Card>
    )
}

export default RodStateCard
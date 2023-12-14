import {Card, Typography, CardContent, CardActions, Switch, FormControlLabel} from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"

const TempCoolantCard = (props) => {
    const {id} = useParams()
    const {reactors} = props

    // const debounce (){
    
    // }

    const handleCoolantSwitch = async (checked) => {
        console.log("switched")
        let coolantState = "on"
        if (checked) {
            coolantState = "on"
        }
        else {
            coolantState = "off"
        }
        await fetch(`https://nuclear.dacoder.io/reactors/coolant/${id}?apiKey=b9d10dcab8f4dd45`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                "coolant": coolantState
            })
        })
    }


    // I know that the following code is travesty but my brain is so fried rn extracting
    // and storing the current reactor's values onto the variables would be preferable. 
    // don't feel like doing it rn
    let tempAmount = reactors.length != 0? reactors.find((reactor) => reactor.id === id).temperature.amount.toFixed(2) : "loading";
    let tempUnit = reactors.length != 0? reactors.find((reactor) => reactor.id === id).temperature.unit : "";
    let tempStatus = reactors.length != 0? reactors.find((reactor) => reactor.id === id).temperature.status : "";
    let coolantState = reactors.length != 0? reactors.find((reactor) => reactor.id === id).coolant : "loading";

    return (
        <Card sx={{
            width: "230px",
            minHeight: "150px",
            backgroundColor: "#FFFFFF",
            color: "#0B3964"
        }}
        elevation={3}
        >
            {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
            <CardContent sx={{py:0, mt:2}} >
                <Typography display="block" variant="h3">
                    {"Temperature State"}
                </Typography>
                <Typography display="block" variant="basicInfo" mt="15px">
                {tempAmount + " " + tempUnit + " " + tempStatus}
                </Typography>
                <Typography display="block" variant="h3" mt="15px">
                    {"Coolant State"}
                </Typography>
                <CardActions sx={{p:"0"}}>
                    <FormControlLabel 
                        control={<Switch color="secondary" checked={reactors.find(reactor => reactor.id === id)?.coolant === "on"}/>} 
                        onChange={(event) => handleCoolantSwitch(event)}
                        label={<Typography variant="basicInfo"> {reactors.find(reactor => reactor.id === id)?.coolant}</Typography>}>
                    </FormControlLabel>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default TempCoolantCard
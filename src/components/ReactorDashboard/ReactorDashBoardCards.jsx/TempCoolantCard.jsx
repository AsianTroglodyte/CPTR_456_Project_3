import {Card, Typography, CardContent, CardActions, Switch, FormControlLabel} from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"

const TempCoolantCard = (props) => {
    const {id} = useParams()
    const {tempData, coolantData} = props
    const [switchState, setSwitchState] = useState(false)
    // setSwitchState(event.target.checked)

    const handleSwitchState = (event, ) => {
        setSwitchState(event.target.checked)
        serverChangeCoolant(event.target.checked)
    }

    const serverChangeCoolant = async (checked) => {
        console.log("switched: ", checked)
        let coolantState = "on"
        if (checked) {
            coolantState = "on"
        }
        else {
            coolantState = "off"
        }
        console.log("coolantState: ", coolantState)


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
                {tempData?.temperature.amount.toFixed(2) + " " + tempData?.temperature.unit + " " + tempData?.temperature.status}
                </Typography>
                <Typography display="block" variant="h3" mt="15px">
                    {"Coolant State"}
                </Typography>
                <CardActions sx={{p:"0"}}>
                    <FormControlLabel 
                        control={<Switch color="secondary" checked={switchState}/>} 
                        onChange={(event) => handleSwitchState(event)}
                        label={<Typography variant="basicInfo"> {coolantData?.coolant}</Typography>}>
                    </FormControlLabel>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default TempCoolantCard
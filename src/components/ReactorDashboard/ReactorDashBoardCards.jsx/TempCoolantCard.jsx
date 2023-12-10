import {Card, Typography, CardContent, CardActions, Switch, FormControlLabel} from "@mui/material"
import { useState } from "react"

const TempCoolantCard = (props) => {
    const {curReactorData, setReactors} = props
    const [coolantState, setCoolantState] = useState({
            "coolant": "on"
        })
    const [switchState, setSwitchState] = useState(false)

    const changeCoolant = (event, val) => {
        setCoolantState(event.target.checked)

        let coolantObj = {}
        if (event.target.checked) {
            coolantObj = {"coolant": "on"}
        }
        else {
            coolantObj = {"coolant": "off"}
        }
        console.log("checked? ", true, coolantObj)
        console.log("checked? ", event.target.checked, coolantObj)
        serverChangeCoolant(event.target.checked, coolantObj)
    }

    const serverChangeCoolant = async (checked, coolantObj) => {

        await fetch(`https://nuclear.dacoder.io/reactors/coolant/${curReactorData.id}?apiKey=892598c5362642d2`, {
            method: "POST",
            // headers: {
            //     "Accept": "application/json",
            //     "Content-Type": "application/json"
            // }
            // ,
            // body: JSON.stringify(
            //     coolantObj
            // )
        })
    }


    return (
        <Card sx={{
            width: "200px",
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
                    {typeof curReactorData === 'undefined'? "loading..." : 
                        curReactorData.temperature.amount.toFixed(2) 
                        + "C " 
                        + curReactorData.temperature.status}
                </Typography>
                <Typography display="block" variant="h3" mt="15px">
                    {"Coolant State"}
                </Typography>
                <CardActions sx={{p:"0"}}>
                    <FormControlLabel 
                        control={<Switch color="secondary"/>} 
                        onChange={(event) => changeCoolant(event)}
                        label={<Typography variant="basicInfo"> {typeof curReactorData === 'undefined'? "loading..." : 
                            curReactorData.coolant}</Typography>}>
                    </FormControlLabel>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default TempCoolantCard
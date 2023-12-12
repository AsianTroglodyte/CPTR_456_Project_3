import {Card, Button, CardHeader, CardActions, Typography} from "@mui/material"
import { useParams } from "react-router-dom"

const FuelInjectorCard = (props) => {
    const { reactors, setReactors} = props
    const {id} = useParams()


    const handleRefuel = async () => {
        await fetch(`https://nuclear.dacoder.io/reactors/refuel/${id}?apiKey=892598c5362642d2`, {
            // curl -d '{"name":"Jamie","age":"23","image":""}' -H 'Content-Type: application/json' -X PUT  https://example.com/api/2/update/31
            method: "POST"
        })
        const jsonData = await rawData.json()
        setReactors(reactors)
    }

    const handleMaintenanceMode = async () => {
        await fetch(`https://nuclear.dacoder.io/reactors/refuel/${id}?apiKey=892598c5362642d2`, {
            // curl -d '{"name":"Jamie","age":"23","image":""}' -H 'Content-Type: application/json' -X PUT  https://example.com/api/2/update/31
            method: "POST"
        })
    }

    let fuelPercentage = reactors.length != 0? reactors.find((reactor) => reactor.id === id).fuelLevel.percentage.toFixed(2) : "loading";
    
    return (
        <Card sx={{
            width: "230px",
            minHeight: "135px",
            backgroundColor: "#FFFFFFF",
            color: "#0B3964"
        }}
        elevation={3}
        >
            <CardHeader 
                title={"Fuel Injector"} 
                sx={{fontWeight: "Medium", mx: "8"}} 
                titleTypographyProps={{variant:'h3' }}/>
            {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
            <Typography display="block" variant="basicInfo" sx={{mx:"16px", p:"0px", mb: "16px"}}>
                {fuelPercentage}% full
            </Typography>
            <CardActions sx={{mx:"16px", p:"0px"}}>
                <Button variant="contained"  size="small" color="regularButton"> Refuel </Button>
                <Button variant="contained"  size="small" color="regularButton"> Maintenance </Button>
            </ CardActions>
        </Card>
    )
}

export default FuelInjectorCard
import {Card, Button, CardHeader, CardActions, Typography} from "@mui/material"
import { enqueueSnackbar } from "notistack"
import { useParams } from "react-router-dom"

const FuelInjectorCard = (props) => {
    const { fuelLevelData, rodsLowered, setRodsLowered, reactorStateData} = props
    const {id} = useParams()



    const handleRefuel = async () => {
        if (reactorStateData?.state == "Maintenance"){
            mustMaintenanceNotif()
            return
        }

        console.log('handleMaintenance', id)
        await fetch(`https://nuclear.dacoder.io/reactors/refuel/${id}?apiKey=b9d10dcab8f4dd45`, {
            method: 'POST'
        })
    }

    const handleMaintenance = async () => {
        console.log('handleMaintenance', id)
        await fetch(`https://nuclear.dacoder.io/reactors/maintenance/${id}?apiKey=b9d10dcab8f4dd45`, {
            method: 'POST'
        })
        setRodsLowered(300)
    }

    const mustMaintenanceNotif = () => {
        enqueueSnackbar(`Must be in Maintenance Mode to Refuel`, {variant: "info"})
    }

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
                {fuelLevelData?.fuel.percentage.toFixed(2) + " %"} 
            </Typography>
            <CardActions sx={{mx:"16px", p:"0px"}}>
                <Button onClick={handleRefuel} variant="contained"  size="small" color="regularButton"> Refuel </Button>
                <Button onClick={handleMaintenance} variant="contained"  size="small" color="regularButton"> Maintenance </Button>
            </ CardActions>
        </Card>
    )
}

export default FuelInjectorCard

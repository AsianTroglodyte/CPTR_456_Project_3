import {Card, CardHeader, CardActions, Button} from "@mui/material"
import { useParams } from "react-router-dom"

const ShutdownCard = (props) => {

    const {id} = useParams()

    const handleControlShutdown = async () => {
        console.log('handleControlShutdown', id)
        await fetch(`https://nuclear.dacoder.io/reactors/controlled-shutdown/${id}?apiKey=b9d10dcab8f4dd45`, {
            method: 'POST',
        })
    }

    const handleEmergencyShutdown = async () => {
        console.log('handleEmergencyShutdown', id)
        await fetch(`https://nuclear.dacoder.io/reactors/emergency-shutdown/${id}?apiKey=b9d10dcab8f4dd45`, {
            method: 'POST',
        })
    }

    return (
        <Card sx={{
            width: "230px",
            minHeight: "100px",
            backgroundColor: "#FFFFFFF",
            color: "#0B3964"
        }}
        elevation={3}
        >
            <CardHeader 
                title={"Shutdown"} 
                sx={{fontWeight: "Medium", mx: "8"}} 
                titleTypographyProps={{variant:'h3' }}
                />
            {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
            <CardActions sx={{mx:"16px", p:"0px"}}>
                <Button onClick={handleControlShutdown} variant="contained"  size="small" color="regularButton"> Controlled </Button>
                <Button onClick={handleEmergencyShutdown} variant="contained"  size="small" color="emergencyButton"> Emergency </Button>
            </CardActions>
        </Card>
    )
}

export default ShutdownCard
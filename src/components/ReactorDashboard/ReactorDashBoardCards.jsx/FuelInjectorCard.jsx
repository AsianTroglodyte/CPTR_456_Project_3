import {Card, Button, CardHeader, CardActions, Typography} from "@mui/material"
import { useParams } from "react-router-dom"

const FuelInjectorCard = (props) => {
    const { reactors, setReactors} = props
    const {id} = useParams

    // const handleRefuel = async () => {
    //     const rawData = await fetch(`https://nuclear.dacoder.io/reactors/refuel/${reactor.id}?apiKey=892598c5362642d2`, {
    //         // curl -d '{"name":"Jamie","age":"23","image":""}' -H 'Content-Type: application/json' -X PUT  https://example.com/api/2/update/31
    //         method: "PUT",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(

    //         )
            
    //     })
    
    //     const jsonData = await rawData.json()
    //     setReactors(reactors)
    // }
    
    return (
        <Card sx={{
            width: "200px",
            minHeight: "100px",
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
            <Typography>

            </Typography>
            <CardActions sx={{mx:"16px", p:"0px"}}>
                <Button variant="contained"  size="small" color="regularButton"> Refuel </Button>
            </ CardActions>
        </Card>
    )
}

export default FuelInjectorCard
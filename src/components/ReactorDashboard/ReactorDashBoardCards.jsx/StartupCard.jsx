import {Card, CardHeader, CardActions, Button} from "@mui/material"
import { useParams } from "react-router-dom"

const StartupCard = (props) => {
    const {setReactors, reactors} = props
    const {id} = useParams()

    const handleStartup = async () => {
        console.log('handle startup: ', id)
        await fetch(`https://nuclear.dacoder.io/reactors/start-reactor/${id}?apiKey=b9d10dcab8f4dd45`, {
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
                title={"Startup"} 
                sx={{fontWeight: "Medium", mx: "8"}} 
                titleTypographyProps={{variant:'h3' }}
                />
            {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
            <CardActions sx={{mx:"16px", p:"0px"}}>
                <Button onClick={handleStartup} variant="contained"  size="small" color="regularButton"> Start </Button>
            </CardActions>
        </Card>
    )
}

export default StartupCard
import {Card, CardHeader, CardActions, Button} from "@mui/material"

const ShutdownCard = (props) => {
    const {setReactors, reactors} = props
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
                <Button variant="contained"  size="small" color="regularButton"> Controlled </Button>
                <Button variant="contained"  size="small" color="emergencyButton"> Emergency </Button>
            </CardActions>
        </Card>
    )
}

export default ShutdownCard
import {Card, Button, CardHeader, CardActions} from "@mui/material"

const FuelInjectorCard = () => {
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
            <CardActions sx={{mx:"16px", p:"0px"}}>
                <Button variant="contained"  size="small" color="regularButton"> Refuel </Button>
            </ CardActions>
        </Card>
    )
}

export default FuelInjectorCard
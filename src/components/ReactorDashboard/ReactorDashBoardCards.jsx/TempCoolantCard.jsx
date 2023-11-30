import {Card, Typography, CardContent, CardActions, Switch, FormControlLabel} from "@mui/material"

const TempCoolantCard = () => {
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
                    {"100C Safe"}
                </Typography>
                <Typography display="block" variant="h3" mt="15px">
                    {"Coolant State"}
                </Typography>
                <CardActions sx={{p:"0"}}>
                    <FormControlLabel 
                        control={<Switch color="secondary"/>} 
                        label={<Typography variant="basicInfo"> On</Typography>}>
                    </FormControlLabel>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default TempCoolantCard
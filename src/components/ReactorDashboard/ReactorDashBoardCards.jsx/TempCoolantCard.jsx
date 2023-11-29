import {Card, Typography, CardContent} from "@mui/material"

const TempCoolantCard = () => {
    return (
        <Card sx={{
            width: "200px",
            minHeight: "120px",
            backgroundColor: "#FFFFFFF",
            color: "#0B3964"
        }}
        elevation={3}
        >
            {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
            <CardContent sx={{py:0, mt:2}} >
                <Typography display="block" variant="h3">
                    {"Temperature State"}
                </Typography>
                <Typography display="block" variant="basicInfo">
                    {"100C Safe"}
                </Typography>
                <Typography display="block" variant="h3" mt="15px">
                    {"Coolant State"}
                </Typography>
                <Typography display="block"  variant="basicInfo">
                    {"temperature"}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TempCoolantCard
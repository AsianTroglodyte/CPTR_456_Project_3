import {Card, CardHeader, CardContent, Typography} from "@mui/material"

const RodStateCard = () => {
    return (
        <Card sx={{
            width: "200px",
            minHeight: "80px",
            backgroundColor: "#FFFFFFF",
            color: "#0B3964"
        }}
        elevation={3}
        >
            <CardHeader 
                title={"Rod State"} 
                sx={{fontWeight: "Medium", mx: "8"}} 
                titleTypographyProps={{variant:'h3' }}/>
            {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
            <CardContent sx={{py:0}} >
                <Typography display="block" variant="basicInfo">
                    {"5 rods in 5 rods out"}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RodStateCard
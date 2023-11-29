import {Card, CardHeader, CardContent, Typography} from "@mui/material"

const PowerOutputCard = () => {
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
                title={"Power Output"} 
                sx={{fontWeight: "Medium", mx: "8"}} 
                titleTypographyProps={{variant:'h3' }}/>
            {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
            <CardContent sx={{py:0, mb:2}} >
                <Typography display="block" variant="basicInfo">
                    {"100 megawatts"}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PowerOutputCard
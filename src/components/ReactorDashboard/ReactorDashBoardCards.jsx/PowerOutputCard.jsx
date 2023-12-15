import {Card, CardHeader, CardContent, Typography} from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"

const PowerOutputCard = (props) => {
    let {id} = useParams()
    const {outputData} = props

    return (
        <Card sx={{
            width: "230px",
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
                    {outputData?.output.amount + " " + outputData?.output.unit}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PowerOutputCard
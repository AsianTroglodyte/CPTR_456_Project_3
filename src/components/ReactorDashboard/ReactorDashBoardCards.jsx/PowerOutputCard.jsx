import {Card, CardHeader, CardContent, Typography} from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"

const PowerOutputCard = (props) => {
    let {id} = useParams()
    const {curReactorData, reactors} = props

    // setPowerOutput(typeof reactors == "undefined" ? "loading" : reactors.find((reactor) => reactor.id === id))
    let powerOutput = reactors.length != 0? reactors.find((reactor) => reactor.id === id).output.amount : "loading"
    let powerUnits =  reactors.length != 0? " " + reactors.find((reactor) => reactor.id === id).output.unit : "loading"
    // console.log("power output: ", powerOutput)

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
                    {powerOutput + " " + powerUnits}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PowerOutputCard
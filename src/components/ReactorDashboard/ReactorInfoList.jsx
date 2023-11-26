import { useState } from "react";
import ReactorCardDesktop from "../MainDashboard/ReactorCardDesktop"
import { Stack, Typography, Box, Card, CardActionArea, CardHeader, CardContent, Button, CardActions} from "@mui/material";


const ReactorInfoList = () => {
    return (
        <>
        <Stack
        direction= "column"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        minWidth= "250px"
        >
        <Typography sx={{color: "#0B3964", fontSize: "24px", fontWeight: "Medium"}} variant="Medium"> This Reactor</Typography>
            <Stack 
            minWidth= "250px"
            alignItems= "center"
            direction= "column"
            spacing={1}
            pb={5}
            pt={1}
            maxHeight={"70vh"}
            overflow={"auto"}
            >
                {/*Fuel Injector*/}
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
                        <Button variant="contained"  size="small" color="regularButton" sx={{
                            color: "#0B3964",
                            fontSize: "12px"
                        }}>
                            Refuel
                        </Button>
                    </ CardActions>
                </Card>

                {/*Power output Card*/}
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

                {/*Rod State Card*/}
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
                            {"temperature"}
                        </Typography>
                    </CardContent>
                </Card>

                {/*Shutdown Card*/}
                <Card sx={{
                    width: "200px",
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
                        <Button variant="contained"  size="small" color="regularButton"  sx={{
                            color: "#0B3964",
                            fontSize: "12px"
                        }}>
                            Controlled
                        </Button>
                        <Button variant="contained"  size="small" color="emergencyButton"  sx={{
                            color: "#0B3964",
                            fontSize: "12px"
                        }}>
                            Emergency
                        </Button>
                    </CardActions>
                </Card>

                {/*temperature and coolant state Card*/}
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
                
            </Stack>
        </Stack>

        </>
    )
}

export default ReactorInfoList
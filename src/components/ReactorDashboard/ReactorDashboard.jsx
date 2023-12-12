import { Stack, Divider, Container, Box} from "@mui/material";
import ReactorInfoList from "./ReactorInfoList"
import ReactorTempGraph from "./ReactorTempGraph";
import AppBarIndividualDashboardDesktop from "../AppBarIndividualDashboardDesktop";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ReactorDashboard = (props) => {
    const {reactors, setReactors} = props
    const {id} = useParams() 

    // const curReactorData = reactors.filter((reactor) => {
    //     if (reactor.id == id){
    //         return reactor
    //     }
    // })[0]

    // console.log("asdfoaefoaiefaef ", curReactorData[0].coolant)

    return (
        <>
        {/*The purpose of the Container MUI layout we are using to basically create "canvas" for us
        to work with*/}
        <AppBarIndividualDashboardDesktop />
            <Container>                    
                <Stack 
                    direction="row" 
                    justifyContent="center"
                    spacing={4} 
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{mt:"80px"}}
                    >
                        <ReactorInfoList reactors={reactors} setReactors={setReactors}/>
                        <ReactorTempGraph />
                    </Stack>
            </Container>
        </>
    )
}

export default ReactorDashboard
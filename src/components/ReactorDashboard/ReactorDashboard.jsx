import { Stack, Divider, Container, Box} from "@mui/material";
import ReactorInfoList from "./ReactorInfoList"
import ReactorTempGraph from "./ReactorTempGraph";

import FuelInjectorCard from "./ReactorDashBoardCards.jsx/FuelInjectorCard";
import PowerOutputCard from "./ReactorDashBoardCards.jsx/PowerOutputCard";
import RodStateCard from "./ReactorDashBoardCards.jsx/RodStateCard";
import ShutdownCard from "./ReactorDashBoardCards.jsx/ShutdownCard";
import TempCoolantCard from "./ReactorDashBoardCards.jsx/TempCoolantCard";

const ReactorDashboard = () => {
    return (
        <>
        {/*The purpose of the Container MUI layout we are using to basically create "canvas" for us
        to work with*/}
            <Container>                    
                <Stack 
                    direction="row" 
                    justifyContent="center"
                    spacing={4} 
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{mt:"80px"}}
                    >
                        <ReactorInfoList />
                        <ReactorTempGraph />
                    </Stack>
            </Container>
        </>
    )
}

export default ReactorDashboard
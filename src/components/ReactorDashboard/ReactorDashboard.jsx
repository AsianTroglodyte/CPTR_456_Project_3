import { Stack, Divider, Container, Box} from "@mui/material";
import ReactorInfoList from "./ReactorInfoList"
import ReactorTempGraph from "./ReactorTempGraph";

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
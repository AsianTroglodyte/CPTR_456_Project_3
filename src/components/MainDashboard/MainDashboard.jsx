import { Stack, Divider, Container, Box} from "@mui/material";
import AllReactorButtons from "./AllReactorButtons"
import AllReactorInfo from "./AllReactorInfo"
import AllReactorListDesktop from "./AllReactorListDesktop";
import AllReactorTempGraph from "./AllReactorTempGraph";

const MainDashboard = () => {
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
                        <AllReactorListDesktop />
                        
                        <Stack direction="column" alignItems="center" spacing={2}>
                            <AllReactorButtons />
                            <AllReactorInfo />
                        </Stack>
                    </Stack>
            </Container>
        </>
    )
}

export default MainDashboard
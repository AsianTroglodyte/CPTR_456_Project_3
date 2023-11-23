import { Stack, Divider, Container, Box} from "@mui/material";
import AllReactorButtons from "./AllReactorButtons"
import AllReactorInfo from "./AllReactorInfo"
import ReactorListDesktop from "./ReactorListDesktop";
import AllReactorTempGraph from "./AllReactorTempGraph";

const MainDashboard = () => {
    return (
        <>
            <Container>
                    <Stack 
                    direction="row" 
                    justifyContent="center"
                    spacing={4} 
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{mt:"80px"}}
                    >
                        <ReactorListDesktop />
                        
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
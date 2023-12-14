import { Stack, Divider, Container, Box } from "@mui/material";
import AllReactorButtons from "./AllReactorButtons"
import AllReactorInfo from "./AllReactorInfo"
import AllReactorListDesktop from "./AllReactorListDesktop";
import AllReactorTempGraph from "./AllReactorTempGraph";
import AppBarMaindashboardDesktop from "../AppBarMaindashboardDesktop";
import { useState, useEffect } from "react";

const MainDashboard = (props) => {
    const { plantName, reactors, avgTemp, avgTemps, totalOutput} = props

    return (
        <>
            {/*The purpose of the Container MUI layout we are using to basically create "canvas" for us
        to work with*/}
            <AppBarMaindashboardDesktop />
            <Container>
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={4}
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{ mt: "80px" }}
                >
                    <p>{plantName}</p>
                    <AllReactorListDesktop reactors={reactors}/>

                    <Stack direction="column" alignItems="center" spacing={2}>
                        <AllReactorButtons reactors={reactors} />
                        <AllReactorTempGraph reactors={reactors} avgTemps={avgTemps}/>
                        <AllReactorInfo totalOutput={totalOutput} avgTemp={avgTemp}/>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default MainDashboard
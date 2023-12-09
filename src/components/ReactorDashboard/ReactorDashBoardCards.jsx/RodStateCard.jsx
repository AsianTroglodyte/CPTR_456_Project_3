import {Card, CardHeader, TextField, Typography, FormControlLabel} from "@mui/material"
import { useState } from "react"

const RodStateCard = () => {
    const [rodsRaised,setRodsRaised] = useState(25)

    const changeRodsRaised = (event) => {
        setRodsRaised(event.target.value)
    }

    return (
        <Card sx={{
            width: "200px",
            minHeight: "140px",
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
                    <FormControlLabel 
                        control={<TextField 
                            type="number" 
                            size="small" 
                            color="primary" 
                            value={rodsRaised} 
                            label="Rods"

                            id="filled-number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            onChange={(event, val)=> {setRodsRaised(val)}}
                            inputProps={{min:0, max:250, maxstep:1}}
                            // The margin left styling is a bit strange indeed
                            // the positioning of the label is very off for some reason
                            sx={{width: "80px", height: "20px", ml: "28px"}}/>}
                            sx={{mr:"5px"}}>
                    </FormControlLabel>
                    <Typography variant="basicInfo" sx= {{position: "relative", top: "23px"}}>/250</Typography>
                    <Typography variant="basicInfo" sx= {{display: "block", mt:"35px", mx:"16px"}}>Raised</Typography>
            {/* <Typography variant="basicInfo" sx={{px:"15px"}}> are raised</Typography> */}
        </Card>
    )
}

export default RodStateCard
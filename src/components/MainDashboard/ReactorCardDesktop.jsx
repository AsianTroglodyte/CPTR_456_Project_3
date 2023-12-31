import { Paper, Typography, Card, CardActionArea, CardContent, CardHeader} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {createTheme, ThemeProvider} from "@mui/material";
import { enqueueSnackbar } from 'notistack';

const ReactorCardDesktop = (props) => {
    const {reactorName, reactorTempStatus, reactorID} = props
    let cardColor = ""
    let textColor = ""

    // this switch statement determines what color our card and its text is
    switch (reactorTempStatus) {
        case "Safe":
            cardColor = "#BFD7EA"
            textColor = "#0B3964"
            break
        case "Caution":
            cardColor = "#ffff7b"
            textColor = "#0B3964"
            break
        case "Danger":
            cardColor = "#FF6663"
            textColor = "#FFFFFF"
            break
        case "Meltdown":
            cardColor = "#000000"
            textColor = "#FFFFFF"
            break
    }

    const reactorTempWarning = () => {
        enqueueSnackbar(`${reactorName} ${reactorTempStatus}`, {variant: "error"})
    }

    // if (reactorTempStatus != "Safe") {
    //     reactorTempWarning()
    // }
    
    // Note that there are a lot a MUI tags within. Make sure to get a BASIC understanding of what
    // they are and what they do. Do keep in mind their role here is largely semantic
    return (
        <>
        <Card sx={{
            width: "200px",
            height: "80px",
            minHeight: "80px",
            backgroundColor: cardColor,
            color: textColor
        }}>
            {/*Card Action Area basically allows for clicking the card and performing an action*/}
            <CardActionArea component={RouterLink} to={`/ReactorDashboard/${reactorID}`} sx={{mb:3}}>
                <CardHeader 
                    title={reactorName} 
                    titleTypographyProps={{variant:'h3' }}/>
                {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
                <CardContent sx={{py:0, mb:2}} >
                    <Typography display="block" variant="basicInfo" sx={{pb: 2}}>
                        {reactorTempStatus}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    )
}

export default ReactorCardDesktop
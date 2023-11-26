import { Paper, Typography, Card, CardActionArea, CardContent, CardHeader} from '@mui/material';
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
    typography: {
        h3: {
            fontSize: 16,
        }
    }
})

const ReactorCardDesktop = (props) => {
    const {reactorName, temperature} = props

    let cardColor = ""
    let textColor = ""
    let variantType = ""

    // this switch statement determines what color our card and its text is
    switch (temperature) {
        case "Safe":
            cardColor = "#BFD7EA"
            textColor = "#0B3964"
            break
        case "Warning":
            cardColor = "#ffff7b"
            textColor = "#0B3964"
            break
        case "Danger":
            cardColor = "#FF6663"
            textColor = "#0B3964"
            break
        case "Meltdown":
            cardColor = "#000000"
            textColor = "#FFFFFF"
            break
    }

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
        }}
            elevation={3}
        >
            {/*Card Action Area basically allows for clicking the card and performing an action*/}
            <CardActionArea>
                <CardHeader 
                    title={reactorName} 
                    sx={{fontSize: "12px", fontWeight: "Medium"}} 
                    titleTypographyProps={{variant:'h3' }}/>
                {/*CardContent componenent needs extra margin at the bottom so CardActionArea Component spans card*/}
                <CardContent sx={{py:0, mb:2}} >
                    <Typography display="block" variant="basicInfo">
                        {temperature}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    )
}

export default ReactorCardDesktop
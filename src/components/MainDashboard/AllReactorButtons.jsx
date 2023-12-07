import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AllReactorButtons = ({ reactors }) => {

    const handleShutdown = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            await fetch(`https://nuclear.dacoder.io/reactors/emergency-shutdown/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST',
            })
        }))
    }

    const handleControlShutdown = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            await fetch(`https://nuclear.dacoder.io/reactors/controlled-shutdown/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST',
            })
        }))
    }

    const handleCoolant = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            await fetch(`https://nuclear.dacoder.io/reactors/coolant/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST',
            })
        }))
    }

    

    return (
        <>
            <Stack spacing={2} direction="row">
                <Button onClick={handleShutdown} variant="contained" size="small" sx={{ color: 'emergencyButton' }}>Emergency Shutdown All</Button>
                <Button onClick={handleControlShutdown} variant="contained" size="small" sx={{ color: 'regularButton' }}>Controlled Shutdown All</Button>
                <Button onClick={handleCoolant} variant="contained" size="small" sx={{ color: 'regularButton' }}>Enable/Disable all coolants</Button>
            </Stack>
        </>
    )

}
export default AllReactorButtons

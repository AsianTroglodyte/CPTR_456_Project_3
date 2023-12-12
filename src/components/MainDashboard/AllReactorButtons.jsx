import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AllReactorButtons = ({ reactors }) => {

    const handleShutdown = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            console.log('Shutting Down', reactor.id)
            await fetch(`https://nuclear.dacoder.io/reactors/emergency-shutdown/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST',
            })
        }))
    }

    const handleControlShutdown = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            console.log('Control Shutdown', reactor.id)

            await fetch(`https://nuclear.dacoder.io/reactors/controlled-shutdown/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST'
            })
        }))
    }

    const handleCoolant = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            console.log('handleCoolant', reactor.id)

            await fetch(`https://nuclear.dacoder.io/reactors/coolant/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST'
            })
        }))
    }
    const startReactors = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            console.log('start reactors', reactor.id)

            await fetch(`https://nuclear.dacoder.io/reactors/start-reactor/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST'
            })
        }))
    }
    const handleRefuel = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            console.log('handleRefuel', reactor.id)

            await fetch(`https://nuclear.dacoder.io/reactors/refuel/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST'
            })
        }))
    }
    
    const handleMaintenance = async () => {
        await Promise.all(reactors.map(async (reactor) => {
            console.log('handleMaintenance', reactor.id)

            await fetch(`https://nuclear.dacoder.io/reactors/maintenance/${reactor.id}?apiKey=b9d10dcab8f4dd45`, {
                method: 'POST'
            })
        }))
    }

    

    return (
        <>
            <Stack spacing={2} direction="row">
                <Button onClick={handleShutdown} variant="contained" size="small" color= 'emergencyButton' >Emergency Shutdown All</Button>
                <Button onClick={handleControlShutdown} variant="contained" size="small"  color='regularButton'>Controlled Shutdown All</Button>
                <Button onClick={handleCoolant} variant="contained" size="small"  color='regularButton'>Enable/Disable all coolants</Button>
                <Button onClick={startReactors} variant="contained" size="small"  color='regularButton'>Start All Reactors</Button>
                <Button onClick={handleRefuel} variant="contained" size="small"  color='regularButton'>Refuel All Reactors</Button>
                <Button onClick={handleMaintenance} variant="contained" size="small"  color='regularButton'>All Reactor Maintenance</Button>


                

            </Stack>
        </>
    )

}
export default AllReactorButtons

import { Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import { useParams } from "react-router-dom"
import Chart from 'chart.js/auto'
import { useEffect, useRef } from "react"

const ReactorTempGraph = (props) => {
    const { graphData, reactorStateData} = props
    const canvasRef = useRef(null)


    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const config = {
            type: 'line',
            options: {
                animation: {
                    duration: 0,
                },
                scales: {
                    x: {
                        ticks: {
                            callback: (val, index) => {
                                return index % 2 === 0 ? val : '';
                            }
                        }
                    }
                }
            },
            data: {
                labels: graphData?.map((_, index) => index * 0.5),
                datasets: [
                    {
                        label: 'Temperature',
                        data: graphData,
                        fill: false,
                        borderColor: 'rgba(75,192,192,1)',
                        color: "#E0FF4F",
                        borderWidth: 2,
                    }
                ]
            }
        }
        const myChart = new Chart(ctx, config);
        return () => {
            myChart.destroy()
        }
    }, [graphData]);

    return (
        <>
            <Paper variant="elevation" elevation={3} sx={{p:"15px", width:"50vw"}}>
                <Typography variant="h3" color="primary"> Reactor State: {reactorStateData?.state}</Typography>
                <div style={{ width: "auto", paddingTop: "7vh"}}  >
                    <canvas ref={canvasRef} id="myChart"></canvas>
                </div>
            </Paper>
        </>
    )
}

export default ReactorTempGraph
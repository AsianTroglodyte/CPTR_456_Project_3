import { useEffect, useRef, useState} from "react";
import Chart from 'chart.js/auto'


const AllReactorTempGraph = (props) => {
    const {reactors, avgTemps} = props
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
            labels: avgTemps?.map((_, index) => index * 0.5),
            datasets: [
                {
                label: 'Average Temperatures',
                data: avgTemps,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                }
            ]
            }
        }
        const myChart = new Chart(ctx, config);
    
        return () => {
            myChart.destroy()
        }
        }, [avgTemps]);

    return (
        <>
            <div style={{ width: "45vw", paddingTop: "1vh"}}>
                <canvas ref={canvasRef} id="myChart"></canvas>
            </div>
        </>
    )
}

export default AllReactorTempGraph
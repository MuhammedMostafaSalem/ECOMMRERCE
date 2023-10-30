import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = () => {
    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [10, 90],
            },
        ],
    };
    return (
        <div className='doughnutChart'>
            <Doughnut data={doughnutState} />
        </div>
    )
}

export default DoughnutChart
import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartasChartJS } from 'chart.js/auto';

const LineChart = () => {
    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["#b696e0"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [50, 100],
            },
        ],
    };
    return (
        <div className='lineChart'>
            <Line data={lineState} />
        </div>
    )
}

export default LineChart
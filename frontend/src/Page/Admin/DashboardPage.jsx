import React from 'react'
import './Admin.css'
import DashboardSummary from '../../Components/Admin/Dashboard/DashboardSummary'
import LineChart from '../../Components/Admin/Dashboard/LineChart'
import DoughnutChart from '../../Components/Admin/Dashboard/DoughnutChart'

const DashboardPage = () => {
    return (
        <div>
            <DashboardSummary />
            <LineChart />
            <DoughnutChart />
        </div>
    )
}

export default DashboardPage
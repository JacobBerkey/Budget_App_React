import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DonutChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ['Food', 'Personal Expenses', 'Insurance', 'Transportation', 'Housing', 'Utilities'],
          datasets: [
            {
              label: 'Current Payments',
              data: [254, 46, 160, 364, 1280, 0],
              backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 205, 86)',
                'rgb(116, 227, 73)',
                'rgb(226, 48, 48)',
                'rgb(13, 81, 124)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
              hoverOffset: 25
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 30,
            },
          },
        }}
      />
    </div>
  )
}

export default DonutChart

import React from 'react'
import { Doughnut } from 'react-chartjs-2'


const DonutChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: 'Current Payments',
              data: [, 19, 3],
              backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 205, 86)',
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

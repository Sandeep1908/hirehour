

import React from 'react';
import { Bar } from 'react-chartjs-2';
 

interface TrafficData {
  country: string;
  trafficCount: number;
}

const trafficData: TrafficData[] = [
  { country: 'United States', trafficCount: 80 },
  { country: 'Canada', trafficCount: 60 },
  { country: 'Costa Rica', trafficCount: 40 },
  { country: 'Mexico', trafficCount: 20 },
  { country: 'Others', trafficCount: 50 },
];

const TrafficByLocationChart: React.FC = () => {
  const labels = trafficData.map((data) => data.country);
  const data  = {
    labels: labels,
    datasets: [
      {
        label: 'Traffic',
        data: trafficData.map((data) => data.trafficCount),
        backgroundColor: ['#BDECBF', '#A5B3F9', '#022931', '#CECFF7', '#88B0A1'], // Colors for bars
        hoverBackgroundColor: [
          'rgba(189, 236, 191, 0.7)',
          'rgba(165, 179, 249, 0.7)',
          'rgba(2, 41, 49, 0.7)',
          'rgba(206, 207, 247, 0.7)',
          'rgba(136, 176, 161, 0.7)',
        ], 
        borderRadius: 10,
        barThickness: 50,
        
      },
    ],
  };

  const options = {
    responsive: true,
   
    
    plugins: {
      legend: {
        display: false,
      },

      datalabels:{
        display:false
    },
    },
    scales: {
        x: {
            grid: {
              display: false,  
            },
          },
      y: {
        beginAtZero: true,
        grid: {
             display: true,  
             color: '#E5E5EF',
             drawBorder: false,

        
          },
        ticks: {
          callback: function (value:string) {
            return `${value}k`;
          },
        
        },
        
      },
    },
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-start text-sm mb-4">Traffic by Location</h2>
      <div className="relative h-[40vh] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TrafficByLocationChart;

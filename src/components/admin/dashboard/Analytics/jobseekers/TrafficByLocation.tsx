import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getGeolocationStats } from '../../../../../utils/admin/getUserStats';
import { useQuery } from '@tanstack/react-query';

 
type CandidateLocationType = {
  count: number;
  country: string;
  month: string;
};

 

const TrafficByLocationChart: React.FC = () => {
  const { data: analytics } = useQuery({
    queryKey: ['analytics'],
    queryFn: getGeolocationStats,
  });

  const dataS= analytics?.data?.data?.candidate?.map((i:CandidateLocationType)=>{
    return(
      {
        country:i?.country,
        count:i?.count
      }
    )
  })

  const data = {
    labels: dataS?.map((i:CandidateLocationType)=>i.country),
    datasets: [
      {
        label: 'Traffic',
        data: dataS?.map((i:CandidateLocationType)=>i.count),
        backgroundColor: ['#BDECBF', '#A5B3F9', '#022931', '#CECFF7', '#88B0A1'],  
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

      datalabels: {
        display: false,
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
          callback: function (value: string) {
            return `${value}`;
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

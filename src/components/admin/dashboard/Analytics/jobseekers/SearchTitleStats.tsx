import React from 'react';
import { Doughnut } from 'react-chartjs-2';
 
 

interface JobSearchData {
  jobTitle: string;
  userCount: number;
}

const jobSearchData: JobSearchData[] = [
  { jobTitle: 'Java Developer', userCount: 120 },
  { jobTitle: 'UI/UX Designer', userCount: 80 },
  { jobTitle: 'SaaS DevOps', userCount: 60 },
  { jobTitle: 'Data Scientist', userCount: 100 },
  { jobTitle: 'Product Manager', userCount: 90 },
];

const SearchTitleStats: React.FC = () => {
  // Prepare the data for the doughnut chart
  const labels = jobSearchData ? jobSearchData.map((item) => item.jobTitle) : [];
  const chartData= {
    labels: labels,
    datasets: [
      {
        data: jobSearchData.map((data) => data.userCount),
        backgroundColor: ['#022931', '#A5B3F9', '#BDECBF', '#88B0A1', '#CECFF7'] as string[],
        hoverBackgroundColor: [
          'rgba(16, 75, 83, 0.7)',
          'rgba(144, 185, 255, 0.7)',
          'rgba(8, 140, 84, 0.7)',
          'rgba(71, 217, 86, 0.7)',
          'rgba(129, 161, 230, 0.7)',
        ] as string[],
        borderRadius: 10,
        spacing:3,
        clip:3
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        formatter: (
          value: number,
          ctx: { chart: { data: { datasets: { data: number[] }[] } } },
        ) => {
          const total: number = ctx.chart.data.datasets[0].data.reduce(
            (acc: number, val: number) => acc + val,
            0,
          );
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        color: '#fff',
        font: {
          weight: 'bold',
        },
      }  
    },
  };

  const bg =
    Array.isArray(chartData.datasets[0].backgroundColor) &&
    (chartData.datasets[0].backgroundColor as string[]);


    const totalUserCount = jobSearchData.reduce(
      (acc, current) => acc + current.userCount,
      0
    );
  
    // Calculate percentages for each job title
    const percentages = jobSearchData.map((data) => {
      return ((data.userCount / totalUserCount) * 100).toFixed(2);
    });

  return (
    <div className="flex w-full h-full">
      {/* Doughnut Chart */}
      <div className="h-auto">
        <h2 className="text-start text-sm mb-4">Job Search Titles</h2>

        <div className="flex justify-between items-center">
          <div className="relative h-[30vh] w-full">
            <Doughnut data={chartData} options={chartOptions} />
          </div>

          <div id="custom-legend" className="ml-5 w-full">
            {labels.map((label, index) => (
              <div key={index} className="w-full h-full flex justify-between items-center space-x-5 ">

                <div className='flex items-center mb-4'>
                <span
                  className="w-2 h-2 mr-2 text-xs rounded-full"
                  style={{
                    backgroundColor: bg ? bg[index] : 'gray',
                  }}
                />
                <p className="text-xs w-full"> {label}</p>
                </div>

                <div className='mb-4 w-14  text-white h-5 flex justify-center items-center rounded-full' style={{
                    backgroundColor: bg ? bg[index] : 'gray',
                  }} >
                  <p className='text-[10px]'>+{percentages[index]} %</p>
                </div>
               
              </div>
            ))}
          </div>

           
        </div>
      </div>
    </div>
  );
};

export default SearchTitleStats;

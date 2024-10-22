import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
 

interface DataPoint {
  month: string;
  totalUsers: number;
  totalResumes: number;
  totalRecruiters: number;
}

interface YearlyData {
  [year: number]: DataPoint[];
}

const MultilineChartWithLegend: React.FC = () => {
  const yearlyData: YearlyData = {
    2024: [
      { month: 'Jan', totalUsers: 10000, totalResumes: 6000, totalRecruiters: 4000 },
      { month: 'Feb', totalUsers: 20000, totalResumes: 12000, totalRecruiters: 7000 },
      { month: 'Mar', totalUsers: 35000, totalResumes: 22000, totalRecruiters: 10000 },
      { month: 'Apr', totalUsers: 40000, totalResumes: 25000, totalRecruiters: 15000 },
      { month: 'May', totalUsers: 50000, totalResumes: 30000, totalRecruiters: 25000 },
      { month: 'Jun', totalUsers: 85000, totalResumes: 50000, totalRecruiters: 35000 },
      { month: 'Jul', totalUsers: 95000, totalResumes: 55000, totalRecruiters: 40000 },
      { month: 'Aug', totalUsers: 100000, totalResumes: 60000, totalRecruiters: 45000 },
      { month: 'Sep', totalUsers: 105000, totalResumes: 62000, totalRecruiters: 50000 },
    ],
  };

  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const selectedData = yearlyData[selectedYear];

  // Calculate totals for legend display
  const totalUsers = selectedData[selectedData.length - 1].totalUsers;
  const totalResumes = selectedData[selectedData.length - 1].totalResumes;
  const totalRecruiters = selectedData[selectedData.length - 1].totalRecruiters;

  // Define the chart data structure
  const chartData  = {
    labels: selectedData.map((data) => data.month),
    datasets: [
      {
        label: 'Total Users',
        data: selectedData.map((data) => data.totalUsers),
        borderColor: '#104B53',
        borderWidth: 1,
        datalabels:{
          display:false
        }
      },
      {
        label: 'Total Resumes in Database',
        data: selectedData.map((data) => data.totalResumes),
        borderColor: '#90B9FF',

        borderWidth: 1,
        datalabels:{
          display:false
        }
      },
      {
        label: 'Total Incoming Recruiters',
        data: selectedData.map((data) => data.totalRecruiters),
        borderColor: '#088C54',

        borderWidth: 1,
        datalabels:{
          display:false
        }
      },
    ],
  };

  // Define chart options
  const chartOptions  = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
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
        ticks: {
          callback: function (value:string) {
            return `${Number(value) / 1000}K`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full  h-full  ">
      <div className="flex justify-between items-center mb-4">
        <div className="w-full flex items-center space-x-6 ">
          <div className="flex   justify-center items-center space-x-1   text-[#3A3A3C]">
            <div className="w-2 h-2 bg-[#104B53] rounded-full"></div>
            <div className="flex flex-col justify- items-start text-[10px]  text-[#3A3A3C]">
              <p className="font-semibold">{totalUsers / 1000}K</p>
              <p>Total Users</p>
            </div>
          </div>

          <div className="flex   justify-center items-center space-x-1   text-[#3A3A3C]">
            <div className="w-2 h-2 bg-[#90B9FF] rounded-full"></div>
            <div className="flex flex-col justify- items-start text-[10px]  text-[#3A3A3C]">
              <p className="font-semibold">{totalResumes / 1000}K</p>
              <p>Total Resume in Database</p>
            </div>
          </div>

          <div className="flex   justify-center items-center space-x-1   text-[#3A3A3C]">
            <div className="w-2 h-2 bg-[#158F57] rounded-full"></div>
            <div className="flex flex-col justify-center items-start text-[10px]  text-[#3A3A3C]">
              <p className="font-semibold">{totalRecruiters / 1000}K</p>
              <p> Total Incoming Recruiters</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center w-full ">
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="text-xs bg-transparent outline-none"
          >
            <option value={2024}>2024</option>
          </select>
        </div>
      </div>

      {/* Line Chart */}

      <div className="relative h-[40vh]">
        {' '}
        {/* Adjust height here */}
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default MultilineChartWithLegend;

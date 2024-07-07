// components/RentChart.js
'use client'


import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RentChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Rent Collected',
        data: [1000, 1200, 1100, 900, 1050, 1150, 1250, 1300, 1200, 1100, 1250, 1350],
        fill: false,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderColor: 'rgba(0, 255, 0, 1)',
      },
      {
        label: 'Expected Rent',
        data: [1100, 1150, 1200, 1150, 1200, 1250, 1200, 1250, 1200, 1250, 1300, 1250],
        fill: false,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderColor: 'rgba(255, 0, 0, 1)',
      },
      {
        label: 'Rent Arrears',
        data: [100, 150, 200, 250, 300, 350, 300, 350, 300, 350, 300, 250],
        fill: false,
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        borderColor: 'rgba(0, 0, 255, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Rent Collected, Expected Rent, and Rent Arrears (January - December)',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default RentChart;

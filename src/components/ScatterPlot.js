import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: 'Scatter Dataset',
      data: Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
      backgroundColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
    },
  },
};

const ScatterPlot = () => {
  return (
    <Box className="p-4">
      <Scatter data={data} options={options} />
    </Box>
  );
};

export default ScatterPlot;


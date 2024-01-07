import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = () => {
  
  const data = [
            {
                name: 'Mon',
                Visitors : 40000,
            },
            {
                name: 'Tue',
                Visitors : 20000,
            },
            {
                name: 'Wed',
                Visitors : 10000,
            },
            {
                name: 'Thu',
                Visitors : 30000,
            },
            {
                name: 'Fri',
                Visitors : 50000,
            },
            {
                name: 'Sat',
                Visitors : 20000,
            },
        ];

  return (
    <div>
      <BarChart width={400} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Visitors" fill="#8884d8" barSize={10}/>
      </BarChart>
    </div>
  );
};

export default BarChartComponent;

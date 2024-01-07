import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AreaChartComponent = () => {

  const data = [
    { month: 'Jan', sales: 12 },
    { month: 'Feb', sales: 19 },
    { month: 'Mar', sales: 3 },
    { month: 'Apr', sales: 5 },
    { month: 'May', sales: 2 },
  ];

  return (
    <div>
      <AreaChart width={300} height={150} data={data} margin={{ top: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="sales" fill="#8884d8" stroke="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default AreaChartComponent;

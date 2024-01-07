import React from 'react'
import { PieChart, Pie,} from 'recharts'; 

  const data0 = [
    {
      "name": "Current Week",
      "value": 2400
    },
    {
      "name": "Last Week",
      "value": 4567
    },
];


const PieCha = () => {
  return (
      <div>
        <PieChart width={250} height={250}>
            <Pie data={data0} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} fill="#F07345" label />
        </PieChart>
        <div>
          <p className='text-[15px] font-bold leading-[26px] text-black/[0.6]'>Total Sale&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6967</p>
        </div>
        <div>
          <p className='text-[15px] font-bold leading-[26px] text-black/[0.6]'>Current Week&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2400&nbsp;&nbsp;&nbsp;<span className="text-[#FD0000]">-3%</span></p>
        </div>
        <div>
          <p className='text-[15px] font-bold leading-[26px] text-black/[0.6]'>Last Week&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4567&nbsp;&nbsp;&nbsp;<span className="text-[#00FF00]">+3%</span></p>
        </div>
      </div> 
  )
}

export default PieCha
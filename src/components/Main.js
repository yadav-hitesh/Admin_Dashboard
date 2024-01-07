import React from 'react'
import { FaEllipsisV, FaMouse, FaPeopleCarry, FaUser, FaCalendar,} from "react-icons/fa"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import BarChartComponent from './BarChart';
import PieCha from './PieCha';
import queries from '../assets/queries.jpeg';
import Table from './tabl';
import AreaChartComponent from './AreaChart';

const datas = [
    {
        name: 'Jan',
        Course_Sale : 40000,
        Course_Visit: 24000,
        amt: 24000,
    },
    {
        name: 'Feb',
        Course_Sale : 30000,
        Course_Visit: 13980,
        amt: 22100,
    },
    {
        name: 'Mar',
        Course_Sale : 20000,
        Course_Visit: 98000,
        amt: 22900,
    },
    {
        name: 'Apr',
        Course_Sale : 27800,
        Course_Visit: 39080,
        amt: 20000,
    },
    {
        name: 'May',
        Course_Sale : 18900,
        Course_Visit: 48000,
        amt: 21810,
    },
    {
        name: 'Jun',
        Course_Sale : 23900,
        Course_Visit: 38000,
        amt: 25000,
    },
    {
        name: 'Jul',
        Course_Sale : 34900,
        Course_Visit: 53000,
        amt: 21000,
    },
    {
        name: 'Aug',
        Course_Sale : 56900,
        Course_Visit: 43000,
        amt: 21000,
    },
    {
        name: 'Sep',
        Course_Sale : 76900,
        Course_Visit: 53000,
        amt: 21000,
    },
    {
        name: 'Oct',
        Course_Sale : 39900,
        Course_Visit: 73000,
        amt: 21000,
    },
    {
        name: 'Nov',
        Course_Sale : 44900,
        Course_Visit: 7000,
        amt: 21000,
    },
    {
        name: 'Dec',
        Course_Sale : 54900,
        Course_Visit: 43000,
        amt: 21000,
    },
];




const Main = () => {



    return (
        // <div className='items-center'>
        <div className='px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer'>Dashboard</h1>

                {/* <button className='bg-[#5C588E] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]'>Generate Report</button> */}
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>IMPRESSIONS (MONTHLY)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>40,000</h1>
                    </div>
                    <FaMouse fontSize={28} />

                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>TOTAL AUDIENCE</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>240,000</h1>
                    </div>
                    <FaUser fontSize={28} />
                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>ENGAGEMENTS </h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>240,000</h1>
                    </div>
                    <FaCalendar fontSize={28} />
                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#F6C23E] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>ENGAGED AUDIENCE</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>200,000</h1>
                    </div>
                    <FaPeopleCarry fontSize={28} />
                </div>
            </div>

            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                        <h2 className='text-[#5C588E] text-[16px] leading-[19px] font-bold'>Revenue</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>

                    <div className="w-full">
                        {/* <canvas id="myAreaChart"></canvas> */}
                        {/* <Line options={options} data={data} /> */}
                        <LineChart
                            width={750}
                            height={400}
                            data={datas}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Course_Sale" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="Course_Visit" stroke="#82ca9d" />
                        </LineChart>
                    </div>

                </div>
                <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#5C588E] text-[16px] leading-[19px] font-bold'>Visitor</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[0px]'>
                        <BarChartComponent />
                        {/* <PieComponent /> */}
                    </div>
                </div>
            </div>

            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[25%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#5C588E] text-[16px] leading-[19px] font-bold'>Sales</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[25px]'>
                        <PieCha />
                    </div>
                </div>

                <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#5C588E] text-[16px] leading-[19px] font-bold'>Weekly Sales Stats</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                     {/* space-y-[15px] py-[15px] */}
                    <div className=' '>
                        <AreaChartComponent />
                        <div className='flex items-center justify-between py-[20px] px-[20px]'>
                            <div><img src={queries} alt="" width="50" height="100"/></div>
                            <div><p>Adobe XD Part 01</p>
                            <p className='text-[13px] font-bold leading-[16px] text-black/[0.4]'>UIUX Design</p>
                            </div>
                            <button className='bg-[#3FF6AD] h-[32px] rounded-[3px] text-[#006600] flex items-center justify-center px-[8px]'>$20</button>
                        </div>
                        <div className='flex items-center justify-between py-[0px] px-[20px]'>
                            <div><img src={queries} alt="" width="50" height="100"/></div>
                            <div><p>Adobe XD Part 01</p>
                            <p className='text-[13px] font-bold leading-[16px] text-black/[0.4]'>UIUX Design</p>
                            </div>
                            <button className='bg-[#EBF0FE] h-[32px] rounded-[3px] text-[#5C588E] flex items-center justify-center px-[8px]'>$20</button>
                        </div>
                        <div className='flex items-center justify-between py-[20px] px-[20px]'>
                            <div><img src={queries} alt="" width="50" height="100"/></div>
                            <div><p>Adobe XD Part 01</p>
                            <p className='text-[13px] font-bold leading-[16px] text-black/[0.4]'>UIUX Design</p>
                            </div>
                            <button className='bg-[#DB9B9F] h-[32px] rounded-[3px] text-[#FD0000] flex items-center justify-center px-[8px]'>$20</button>
                        </div>
                    </div>
                </div>
                <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#5C588E] text-[16px] leading-[19px] font-bold'>Student Queries</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[15px]'>
                        <div className='flex items-center justify-between py-[20px] px-[20px]'>
                            <div><img src={queries} alt="" width="50" height="100"/></div>
                            <div><p>Machine Learning Bootcamp</p>
                            <p className='text-[13px] font-bold leading-[16px] text-black/[0.4]'>By James Board</p>
                            </div>
                            <button className='bg-[#5C588E] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]'>View</button>
                            <button className='bg-[#DB9B9F] h-[32px] rounded-[3px] text-[#FD0000] flex items-center justify-center px-[8px]'>Decline</button>
                        </div>
                        <div className='flex items-center justify-between py-[20px] px-[20px]'>
                            <div><img src={queries} alt="" width="50" height="100"/></div>
                            <div><p>&nbsp;&nbsp;Python & R In Data Science</p>
                            <p className='text-[13px] font-bold leading-[16px] text-black/[0.4]'>&nbsp;&nbsp;&nbsp;Data Science</p>
                            </div>
                            <button className='bg-[#3FF6AD] h-[32px] rounded-[3px] text-[#006600] flex items-center justify-center px-[8px]'>Approval</button>
                            <button className='bg-[#DB9B9F] h-[32px] rounded-[3px] text-[#FD0000] flex items-center justify-center px-[8px]'>Decline</button>
                        </div>
                        <div className='flex items-center justify-between py-[20px] px-[20px]'>
                            <div><img src={queries} alt="" width="50" height="100"/></div>
                            <div><p>&nbsp;&nbsp;SuperDataScience Support</p>
                            <p className='text-[13px] font-bold leading-[16px] text-black/[0.4]'>&nbsp;&nbsp;&nbsp;Data Science</p>
                            </div>
                            <button className='bg-[#3FF6AD] h-[32px] rounded-[3px] text-[#006600] flex items-center justify-center px-[8px]'>Approval</button>
                            <button className='bg-[#DB9B9F] h-[32px] rounded-[3px] text-[#FD0000] flex items-center justify-center px-[8px]'>Decline</button>
                        </div>
                        <div className='flex items-center justify-between py-[20px] px-[20px]'>
                            <div><img src={queries} alt="" width="50" height="100"/></div>
                            <div><p>Analyst Bootcamp 2020</p>
                            <p className='text-[13px] font-bold leading-[16px] text-black/[0.4]'>Data Science</p>
                            </div>
                            <button className='bg-[#3FF6AD] h-[32px] rounded-[3px] text-[#006600] flex items-center justify-center px-[8px]'>Approval</button>
                            <button className='bg-[#DB9B9F] h-[32px] rounded-[3px] text-[#FD0000] flex items-center justify-center px-[8px]'>Decline</button>
                        </div>
                    </div>
                </div>
            </div > 
            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[100%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#5C588E] text-[16px] leading-[19px] font-bold'>Course Status</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className=' space-y-[15px] py-[15px]'>
                        <Table/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Main
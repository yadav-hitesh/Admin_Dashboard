import React from 'react'
import { FaTachometerAlt, FaRegSun, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaFacebookMessenger, FaWallet, FaUser } from "react-icons/fa"
import picture from '../assets/picture.webp'
import image from '../assets/1.webp';

const Sidebar = () => {
    return (
        <div className='bg-[#5C588E] px-[25px] h-screen'>
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <img src={image} alt="" height={50} width={50}/>
                <h1 className='text-white text-[20px] leading-[14px] font-extrabold cursor-pointer'>Admin</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>My Course</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaWrench color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Resourse</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Quiz</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaFacebookMessenger color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Message</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegChartBar color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>My Status</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                    <FaWallet color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Wallet</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                    <FaRegCalendarAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Calender</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                    <FaUser color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Account</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
            </div>

            <div className='bg-[#FDFDFD] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
                <img src={picture} alt="" />
                <button className='bg-[#F07345] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[10px] leading-[21px] font-normal'>Get Subscription</button>

            </div>
        </div>
    )
}

export default Sidebar
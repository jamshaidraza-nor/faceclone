import React from 'react'
import Rightside from './Rightside'
import Center from './Center'
import { LuPlus } from "react-icons/lu";

function Mainpag() {
  return (
    <div className='flex justify-between bg-gray-100 pt-5'>
        <div className=' h-screen w-[300px]'>
            <Rightside/>
        </div>
        <div className=' w-[500px]'>
            <Center/>
        </div>
        <div className=' h-screen w-[300px]'>
          <div className='text-xl'>Channels</div>
          <div className='flex gap-2 items-center just mt-5'>
            <div className='text-xl items-center justify-center flex rounded-full bg-gray-200 font-bold w-[30px] h-[30px]'><LuPlus /></div>
            <div>Create channel</div>
          </div>
        </div>
    </div>
  )
}

export default Mainpag
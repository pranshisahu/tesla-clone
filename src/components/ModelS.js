import React from 'react'
import { FiChevronDown } from "react-icons/fi";

const ModelS = () => {
    return (

        <div >
            <div className='absolute inset-x-0 top-[310%] text-center'> 
                <h1 className='text-4xl font-bold'>Model S</h1>
                <p className='p-2 text-sm'>Order Online for 
                <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
                    <span className='underline underline-offset-4'>Touchless delivery</span></a>
                     Touchless delivery</p>
             </div>
             <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[-290%]'>
               <a href="https://www.tesla.com/model3/design" > <button className='bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white'>Custom Order</button></a>
                <a href="https://www.tesla.com/model3/design"><button className='bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 '>Existing Inventory</button></a>
             </div>
             <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[-297%]'>
            <FiChevronDown size={24}/>
            </div>
         </div>

    )
}

export default ModelS;
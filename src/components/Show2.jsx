import React from 'react';
import downarrow2 from './assets/Vector (2).png'

const Show2 = () => {
  return (
    <React.Fragment>
        <center>
            <div className='h-[50px] w-[50px] border-[0.6px] border-[#2B5EC0] rounded-full md:flex justify-center items-center mt-[120px] sm:hidden transform hover:translate-y-6 transition-all duration-500'>
                <img src={downarrow2} alt="Vector" />
            </div>
        </center>
    </React.Fragment>
  )
}

export default Show2

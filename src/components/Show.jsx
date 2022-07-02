import React from 'react';
import arrow from './assets/Vector (1).png'

const Show = () => {
  return (
    <React.Fragment>
        <center>
            <div className='h-[30px] w-[30px] border-[0.6px] border-[#2B5EC0] rounded-full flex justify-center items-center mt-[40px] sm:hidden transform hover:translate-y-6'>
                <img src={arrow} alt="Vector" />
            </div>
        </center>
    </React.Fragment>
  )
}

export default Show;
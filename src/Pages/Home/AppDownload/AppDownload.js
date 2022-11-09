import React from 'react';
import img1 from '../../../assets/images/appdownload/1.png'
import img2 from '../../../assets/images/appdownload/2.png'
import img3 from '../../../assets/images/appdownload/3.png'

const AppDownload = () => {
    return (
        <div className='flex justify-around gap-4 mb-10 mt-7 ml-10'>
            <img className='' src={img1} alt="" />
            <div className='mt-12'>
                <h3 className='text-2xl font-semibold'>Download ShareTrip App and <br /> Earn Trip Coin.</h3>
                <div className='flex justify-center'>
                    <img className='mr-5' src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppDownload;
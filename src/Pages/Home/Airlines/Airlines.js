import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/airlines/1.png'
import img2 from '../../../assets/images/airlines/2.png'
import img3 from '../../../assets/images/airlines/3.png'
import img4 from '../../../assets/images/airlines/4.png'
import img5 from '../../../assets/images/airlines/5.png'
import img6 from '../../../assets/images/airlines/6.png'

const Airlines = () => {
    return (
        <div >
            <h2 className='flex justify-center text-5xl font-semibold mb-5 mt-10'>Search for other Top Airlines</h2>
            <div className='grid grid-cols-3 gap-2 mt-5 mb-5'>
                <Link className='flex'>
                    <img className='w-7 ml-10' src={img1} alt="" />
                    <h3>Biman Bangladesh Airlines</h3>
                </Link>
                <Link className='flex'>
                    <img className='w-7 ml-10' src={img2} alt="" />
                    <h3>US-Bangla Airlines</h3>
                </Link>
                <Link className='flex'>
                    <img className='w-7 ml-10' src={img3} alt="" />
                    <h3>Emirates</h3>
                </Link>
                <Link className='flex'>
                    <img className='w-7 ml-10' src={img4} alt="" />
                    <h3>Malaysia Airlines</h3>
                </Link>
                <Link className='flex'>
                    <img className='w-7 ml-10' src={img5} alt="" />
                    <h3>Singapore Airlines</h3>
                </Link>
                <Link className='flex'>
                    <img className='w-7 ml-10' src={img6} alt="" />
                    <h3>NOVOAIR</h3>
                </Link>
            </div>


        </div>
    );
};

export default Airlines;
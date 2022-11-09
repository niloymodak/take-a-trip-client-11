import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { Helmet } from 'react-helmet';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* <Helmet>
                <title>Take A Trip - Services</title>
            </Helmet> */}
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <br />
                <p className='font-semibold mx-5'> We ensure that your traveling is filled with joy, excitement, pleasure, and satisfaction, which you won’t get from anywhere else, and we are keeping it cost effective for you. We are linked up with the best hotels, airlines and food restaurants so that your luxury is guaranteed. We just make sure that you have a quality time on your tour and ensure that you have the best experience when you travel with your loved ones. We can guarantee you that our services will make you come to us more and more for your traveling. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;
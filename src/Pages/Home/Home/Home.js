import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Link className='flex justify-center' to={'/about'}><button className="btn btn-primary mb-3 mt-3 ">Get More Info</button></Link>
            <Services></Services>
            <Link className='flex justify-center' to={'/services'}><button className="btn btn-primary mb-3 mt-3 ">See All</button></Link>
        </div>
    );
};

export default Home;
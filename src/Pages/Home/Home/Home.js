import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AddService from '../../AddService/AddService';
import About from '../About/About';
import Airlines from '../Airlines/Airlines';
import AppDownload from '../AppDownload/AppDownload';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Take A Trip - Home Page</title>
                </Helmet>
            </div>
            <div>
                <Banner></Banner>
                <About></About>
                <Link className='flex justify-center' to={'/aboutus'}><button className="btn btn-primary mb-10 ">About Us</button></Link>
                <Services></Services>
                <Link className='flex justify-center' to={'/services'}><button className="btn btn-primary mb-3 mt-3 ">See All</button></Link>
                <Airlines></Airlines>
                <AppDownload></AppDownload>
                <AddService></AddService>
            </div>
        </div>
    );
};

export default Home;
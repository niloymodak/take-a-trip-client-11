import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-3 sm:m-auto">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} style={{ objectFit: 'cover' }} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><small className='font-semibold'>{description}</small></p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/viewdetail/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
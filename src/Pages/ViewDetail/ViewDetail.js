import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ViewDetail = () => {
    const { _id, img, price, title, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('online-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className='card card-compact w-96 bg-base-100 shadow-xl'>
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p><small>{description}</small></p>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1>Public</h1>
                </div>
                <form onSubmit={handlePlaceReview}>
                    <h2 className="text-4xl">Add Your Review: {title}</h2>
                    <br />
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                    <input className='btn' type="submit" value="Place Your Review" />
                </form>
            </div>
        </div>
    );
};

export default ViewDetail;
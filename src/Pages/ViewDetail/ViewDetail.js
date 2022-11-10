import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img1 from '../../assets/images/reviews/1.jpg'
import img2 from '../../assets/images/reviews/3.jpg'
import img3 from '../../assets/images/reviews/2.jpg'

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
        fetch('https://online-service-review-server.vercel.app/reviews', {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-5">
            <div className='card card-compact w-96 bg-base-100 shadow-xl'>
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p><small className='font-semibold'>{description}</small></p>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div>
                <div className='border border-black mb-3'>
                    <div className='flex'>
                        <div >
                            <img className='w-16 ' src={img1} alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>Ben Adams</p>
                            <small className='font-semibold'>Sydney, Australia</small>
                        </div>
                    </div>
                    <p><small className='font-semibold'>“It was exactly as described in the listing” – that made me laugh! In my experience it’s best to avoid all the fluffy language altogether and stick to the facts. If you have a website, have a guest review it (after they’ve stayed) and tell you whether they felt they got what they were expecting. We’ve had people go through every page on our site looking for differences between the description and the property. Of course they found one or two (and some typos!!)</small></p>
                </div>
                <div className='border border-black mb-3'>
                    <div className='flex'>
                        <div >
                            <img className='w-16 ' src={img2} alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>Emma Hall</p>
                            <small className='font-semibold'>Toronto, Canada</small>
                        </div>
                    </div>
                    <p><small className='font-semibold'>It was so called after the English took to spending the winter in Nice. Some of the rich vacationers commissioned the construction of a walkway along the sea. To this day it is a popular spot for enjoying a stroll and has become a favorite place for boarders and skaters. Its chaises bleues and cabanas are perfect for a lazy time and for contemplation of the azure blue water of the Bay of Angels. Numerous events also take place here including the annual carnival and the Battle of Flowers.</small></p>
                </div>
                <div className='border border-black'>
                    <div className='flex'>
                        <div >
                            <img className='w-16 ' src={img3} alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>John Abraham</p>
                            <small className='font-semibold'>Mumbai, India</small>
                        </div>
                    </div>
                    <p><small className='font-semibold'>What a wonderful experience! The two tour leaders who were archaeologists enthralled us with the history of the Islands. The food was bountiful. On the boat the meals were wholesome and delicious. We were treated to wonderful meals on the the Islands that let us sample each Island's speciality. There was free time on each of the Islands that allowed for shopping, exploring or sitting round watching island life sipping a drink! The accommodation on the gulet was more than adequate with rooms being serviced everyday. There was ample deck space to lounge, reading or talking. The staff on the Gulet were lovely and attentive. Excellent.</small></p>
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
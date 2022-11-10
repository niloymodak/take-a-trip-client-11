import React from 'react';
// import { Helmet } from 'react-helmet';

const AddService = () => {

    // const service = {
    //     imageURL: ' ',
    //     placeName: ' ',
    //     price: ' ',
    //     description: ' ',
    // }

    // fetch('http://localhost:5000/newservice', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     body: JSON.stringify(service),
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(er => console.error(er));

    return (
        <div>
            {/* <Helmet>
                <title>Take A Trip - Add Service</title>
            </Helmet> */}
            <form className='mx-5'>
                <h2 className="text-4xl">Add Your Service:</h2>
                <br />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="imageURL" type="text" placeholder="ImageURL" className="input input-ghost w-full  input-bordered" required />
                    <input name="placeName" type="text" placeholder="Place Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="description" type="text" placeholder="Description" className="input input-ghost w-full  input-bordered" required />
                </div>
                <input className='btn mt-5 mb-5' type="submit" value="Add Your Service" />
            </form>
        </div>
    );
};

export default AddService;
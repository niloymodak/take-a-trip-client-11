import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <div className="hero my-20">
            <Helmet>
                <title>Take A Trip - About Us</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6 font-semibold">Take A Trip is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. Take A Trip is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operators Association of Bangladesh. Safe traveling, your security, and your enjoyment are our focus during your travels. Our experienced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on your face. We believe that your smile is our success and Take A Trip will do anything to keep you smiling.</p>
                    <p className="py-6 font-semibold"> By the Grace of Almighty Allah, we are very pleased to say that the Umrah service is the most successful program from oboskash Being honest and fair is our main motive towards our customer and therefore we deliver you the best services during the Umrah. We know how important this ritual is for the Muslims and thus Take A Trip has come up with different Umrah packages from Bangladesh. Each of our packages is designed for you so that you can pick it according to your desired budget to enjoy and be satisfied with our services. Our experienced trainers will guide you to the end and see any of your matter. We also have a Hajj program that we want to make successful like our Umrah program. Thanks to our top-notch services, most of our customers are based on the recommendation from the previous customers. </p>
                    <p className="py-6 font-semibold"> Take A Trip is specialized in giving the best outbound tours that give you nothing but pleasure and satisfaction. Our cheap international holiday packages from Bangladesh will give you a wide range of choices that will help you to choose your satisfactory tour. We are always concerned for your well-being and consequently, we always keep your budgets in our mind and thus we make our packages very much cost effective for you and your family. We have different types of cheap packages that have the best and the most luxury that you can get within your budget.  </p>
                    <p className="py-6 font-semibold"> Apart from Umrah and tour packages, Take A Trip Travels also have the service of visa processing for you to go travel to your desired country. Since moving from one part of the world to the other part for studying, medical, business, travel, immigration, and other purposes is now a part of our life, Take A Trip travels ensure that you don't get any obstacles on your way, and this will help you with your visa.  The Take A Trip travels know about your headache and frustration and an individual must face lots of complex situation such as visa processing, country laws, immigration laws, rules, and regulations etc. So, you can sit back and relax while we are here to handle all your problems to get you rid of this frustration.  </p>
                    <p className="py-6 font-semibold">  </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
import React from 'react';
import person from '../../..//assets/images/about_us/person.jpg';
import parts from '../../..//assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full  max-w-sm rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="absolute right-5 top-2/4 w-3/5 border-8 max-w-sm rounded-lg shadow-2xl" />
                </div>
                
                <div className='w-1/2'> 
                <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti neque aliquam minima eveniet.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
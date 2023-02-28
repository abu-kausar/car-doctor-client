import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://car-doctor-server-ruby.vercel.app/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl text-semibold">Our Service Area</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, atque placeat deleniti facere quibusdam animi accusamus dignissimos cupiditate itaque laborum nulla maiores porro, rem similique odit iure soluta commodi numquam?</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service = {service}
                    >
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
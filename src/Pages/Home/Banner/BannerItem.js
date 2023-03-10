import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image'>
                <img src={image} className="w-full rounded-xl" alt='' />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 w-1/4 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable Price for car Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa perspiciatis ducimus reiciendis officia, labore impedit libero tenetur deleniti aut doloribus?
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className='btn btn-warning mr-5'>Discover More</button>
                <button className='btn btn-outline btn-warning mr-5'>Latest Projects</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-12">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮-</a>
                <a href={`#slide${next}`} className="btn btn-circle">-❯</a>
            </div>
        </div>
    );
};

export default BannerItem;
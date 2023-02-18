import React from 'react';
import image01 from '../../..//assets/images/banner/1.jpg';
import image02 from '../../..//assets/images/banner/2.jpg';
import image03 from '../../..//assets/images/banner/3.jpg';
import image04 from '../../..//assets/images/banner/4.jpg';
import image05 from '../../..//assets/images/banner/5.jpg';
import image06 from '../../..//assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        id: 1,
        image: image01,
        prev: 6,
        next: 2
    },
    {
        id: 2,
        image: image02,
        prev: 1,
        next: 3
    },
    {
        id: 3,
        image: image03,
        prev: 2,
        next: 4
    },
    {
        id: 4,
        image: image04,
        prev: 3,
        next: 5
    },
    {
        id: 5,
        image: image05,
        prev: 4,
        next: 6
    },
    {
        id: 6,
        image: image06,
        prev: 5,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;
import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'Great quality and it�s welded together just what I was hoping for . fast shipping and great seller!',
            location: 'california',
            img: 'https://i.ibb.co/8YGKjtM/people2.png'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'Quality standards. Going for a long time. Thinking that the product will be smaller.',
            location: 'california',
            img: 'https://i.ibb.co/nbD8PJr/people1.png'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'Product conform to web designation, very simple and nice hardware.',
            location: 'california',
            img: ' https://i.ibb.co/jkrftmB/people3.png'
        },
    ];
    return (
        <div className='grid justify-items-center'>
            <div className=''>
                <div className='text-center my-5'>
                    <h2 className='text-3xl font-bold text-sky-400'>Reviews</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
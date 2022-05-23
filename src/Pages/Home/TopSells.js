import React from 'react';
import TopSell from './TopSell';

const TopSells = () => {
    const tools = [
        {
            _id: 1,
            name: 'Hybrid Motor',
            image: 'https://i.ibb.co/Vtj13G9/1.jpg',
            description: 'The word "motor" refers to any power unit that generates motion, that is a "prime mover", while "electric motor" re',
            minimumOrder: '2',
            availableQuantity: '10',
            price: '$120/unit',
        },
        {
            _id: 2,
            name: 'Engine',
            image: 'https://i.ibb.co/VvH6d64/2.jpg',
            description: 'A machine for converting any of various forms of energy into mechanical force and motion also : a mechanism or ob',
            minimumOrder: '2',
            availableQuantity: '10',
            price: '$120/unit',
        },
        {
            _id: 3,
            name: 'Car Steering',
            image: 'https://i.ibb.co/QPx8s1Z/3.jpg',
            description: 'The steering system converts the rotation of the steering wheel into a swivelling movement of the road wheels in  ',
            minimumOrder: '2',
            availableQuantity: '10',
            price: '$120/unit',
        },
        {
            _id: 4,
            name: 'Brake',
            image: 'https://i.ibb.co/SvzqGqZ/4.jpg',
            description: 'A brake is a mechanical device that inhibits motion by absorbing energy from a moving system. It is used for slowing ',
            minimumOrder: '2',
            availableQuantity: '10',
            price: '$120/unit',
        },
        {
            _id: 5,
            name: 'Battery Cooler',
            image: 'https://i.ibb.co/t2dNfc6/5.jpg',
            description: 'Because batteries are only manufactured to work between certain temperature extremes, they will stop working if there is no ',
            minimumOrder: '2',
            availableQuantity: '10',
            price: '$120/unit',
        },
        {
            _id: 6,
            name: 'Headlight',
            image: 'https://i.ibb.co/tMw07jS/closeup-of-bmw-blue-xenon-lamp-headlight.jpg',
            description: 'A headlamp is a lamp attached to the front of a vehicle to illuminate the road ahead. Headlamps are also often called head',
            minimumOrder: '2',
            availableQuantity: '10',
            price: '$120/unit',
        }
    ]
    return (
        <div className='grid justify-items-center'>
            <div className='my-6'>
                <div className='text-center my-10'>
                    <h3 className='text-red-600'>TOP SALE IN THE WEEK</h3>
                    <h2 className='mb-5 text-3xl font-bold text-sky-400'>BEST SELLER</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        tools.map(tool => <TopSell
                            key={tool._id}
                            tool={tool}
                        ></TopSell>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopSells;
import React, { useEffect, useState } from 'react';
import TopSell from './TopSell';
const TopSells = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    if (tools.length) {
        tools.length = 3
    }
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
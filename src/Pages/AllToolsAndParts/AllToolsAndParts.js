import React, { useEffect, useState } from 'react';
import AllToolAndPart from './AllToolAndPart';
import Purchase from '../Purchase/Purchase'
const AllToolsAndParts = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='grid justify-items-center'>
            <div className='my-6'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        tools.map(tool => <AllToolAndPart
                            key={tool._id}
                            tool={tool}
                        ></AllToolAndPart>)
                    }
                    {/* {
                        tools.map(tool => <Purchase
                            key={tool._id}
                            tool={tool}
                        ></Purchase>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default AllToolsAndParts;
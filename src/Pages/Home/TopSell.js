import React from 'react';
import { Link } from 'react-router-dom';

const TopSell = ({ tool }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={tool.image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {tool.name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>

                    <p><span className='text-rose-500	'>Description:</span> {tool.description} ...</p>
                    <p><span className='text-rose-500'>Minimum Order:</span> {tool.minimumOrder}</p>
                    <p><span className='text-rose-500'>Available Quantity:</span> {tool.availableQuantity}</p>
                    <p><span className='text-rose-500'>Price:</span> {tool.price}</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary"><Link to='/purchase'>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSell;
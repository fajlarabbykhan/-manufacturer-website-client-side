import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='grid justify-items-center'>
            <h1 className="mb-5 text-3xl font-bold text-sky-400 mt-3 ">Business Summary </h1>
            <div className="stats gap-2 stats-vertical lg:stats-horizontal   my-1 drop-shadow-2xl">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">We Served</div>
                    <div className="stat-value text-primary">1.4K</div>
                    <div className="stat-desc">25% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value text-secondary">1.6M</div>
                    <div className="stat-desc">20% more than last year</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-primary">0.6K</div>
                    <div className="stat-desc">We also want your review</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Tools</div>
                    <div className="stat-value text-secondary">1000+</div>
                    <div className="stat-desc">Top class tools</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://i.ibb.co/qkKM6vV/Wpc-Tavg99b5-Xp-K6-STz-SLZ8.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Top Brand </div>
                    <div className="stat-desc ">Toyota</div>
                </div>



            </div>
        </div>
    );
};

export default BusinessSummery;
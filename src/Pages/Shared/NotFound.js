import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-1 m-10'>
                <div className='mt-2 lg:order-first'>
                    <h2 className='text-2xl mb-2 text-bold'>Page Not Found!!!</h2>
                    <p className='text-sm'>Running a successful website means staying alert for errors like broken pages or slow performance. However, sometimes there are problems that you just can’t avoid, and 404 errors are one of them.</p>

                    <p className='text-sm'>A 404 occurs when a user requests a page on your website that doesn’t exist, thus throwing a 404 error page prompting users to return to the right place. No matter how many resources you put into ensuring your website never goes down ... there's always a chance that users could end up here.</p>

                    <p className='text-sm'> It's inconvenient, but a fact of life. And the reaction of visitors when they land on a nonexistent page can range from "taking it in stride" to "totally losing their minds."</p>

                    <p className='text-sm'>  While there's nothing you can do about the latter, you can make things a little less of a pain by having a creative error 404 message. This can do wonders to make your website visitors crack a smile in an otherwise frustrating situation.</p>

                    <p className='text-sm'>To get your website design juices flowing, this post will showcase some of our favorite website error pages. Hopefully, you'll be able to take away a few ideas to snazz up your own 404 message.</p>
                    <button class="btn btn-outline btn-error mt-2"><Link to='/'>Go Home</Link></button>
                </div>
                <div className='order-first '>
                    <img
                        src='https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1649051694~exp=1649052294~hmac=6eb0937fa75afafaa39f9325c0411061f895b1dba707daae4bdba4363f78b328'
                        alt='' />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import slider from "../../Assets/Images/slider-1.jpg"
const Banner = () => {
    return (
        <div>

            <div class="hero  min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/SdPX0R9/background.jpg)" }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold text-white">Wide Selection of Auto Parts</h1>
                        <p class="mb-5 text-white">At the Lowest Price. The chassis of an automobile incorporates all the major assemblies consisting of an engine, components of transmission system such as clutch, gearbox, propeller shaft, axles, a control system such as brakes and steering, and suspension system of the vehicle.

                            In other words, it is the vehicle without its body.</p>
                        <button class="btn btn-primary text-white"><Link to='/toolsorparts'>Get Started</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
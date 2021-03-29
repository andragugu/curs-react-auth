import React from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import GradientLink from "../common/GradientLink";

const Home = () => {
    return (
        <>
            <div className="w-full top-0 bg-white px-10 py-5">
                <div className="flex justify-between">
                    <img src={logo} alt="Logo" className="w-32 h-full"/>
                    <div className="flex items-center">
                        <Link to="signup"
                              className="text-blue-700 mr-6">
                            Sign up
                        </Link>
                        <GradientLink
                            to="/login"
                            text="Log in"
                        />
                    </div>
                </div>
            </div>

            <div className="h-full bg-blue-900">
                <div className="opacity-10">
                    <img src="https://i.ibb.co/WvDSzVr/b-k-HAl6-CKx-M3x-U-unsplash.jpg" alt="Home"/>
                </div>
                <div className="absolute left-0 top-0 mt-32 lg:mt-48 px-12 nato-sans">
                    <div className="w-full lg:w-2/3">
                        <h1 className="text-gray-200 text-2xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                            Harry Potter
                        </h1>
                        <div className="mt-4 sm:mt-10 w-48">
                            <GradientLink
                                text="Get started"
                                size="lg"
                                to="/login"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

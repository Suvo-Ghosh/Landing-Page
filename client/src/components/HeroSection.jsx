import React from "react";

function HeroSection() {
    return (
        <div className="w-full px-2 bg-gray-100 dark:bg-gray-800 transition-colors duration-300  ">
            <div className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row gap-2 ">
                {/* Left Content */}
                <div className="w-full text-center md:text-left animate-SlideFromLeft">
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mt-3 sm:mt-10">Very proud to introduce</p>
                    <h1 className="my-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                        Seamless Learning for Better Future
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Our innovative platform offers an effortless and seamless approach to learning,
                        empowering students of all ages to achieve a brighter future. Join us on a
                        transformative journey to simplify education and unlock your full potential.
                    </p>
                    <div className="mt-6 mb-4 flex justify-center md:justify-start gap-3">
                        <button className="cursor-pointer px-5 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded shadow-md">
                            Start Now
                        </button>
                        <button className="cursor-pointer px-5 py-2 bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded shadow-md">
                            Take Tour
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 hidden md:flex justify-center  items-center">
                    <div className=" sm:w-[80%] md:w-full rounded-xl overflow-hidden">
                        <img className="w-full" src='/main image.png' alt="Hero" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

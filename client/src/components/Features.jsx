import React from "react";
import { FaBookOpen, FaComputer } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { TbDeviceAnalytics } from "react-icons/tb";
import Feature from "./Feature";

function Features() {
    const FeaturesData = [
        {
            name: "Personalized Learning",
            description: "Offer tailored learning experiences through AI and machine learning to cater to individual student needs.",
            image: <FaBookOpen />,
            color: "#4EA6D8",
        },
        {
            name: "Affordability",
            description: "Provide high-quality education at an affordable price point, making it accessible to a broader audience.",
            image: <RiMoneyRupeeCircleFill />,
            color: "#FF6289",
        },
        {
            name: "Industry Partnerships",
            description: "Collaborate with well-known companies and institutions to offer accredited courses and certifications, adding credibility to your offerings.",
            image: <FaHandshake />,
            color: "#FCBF58",
        },
        {
            name: "Innovative Technology",
            description: "Utilize cutting-edge technology, such as augmented reality or virtual reality, to create immersive learning experiences.",
            image: <FaComputer />,
            color: "#44BFC3",
        },
        {
            name: "Responsive Support",
            description: "Provide exceptional customer support and assistance to students and educators.",
            image: <BiSupport />,
            color: "#77B05D",
        },
        {
            name: "Analytics & Insights",
            description: "Offer detailed progress tracking and analytics to help students and teachers monitor performance and make data-driven decisions.",
            image: <TbDeviceAnalytics />,
            color: "#7D78B1",
        },
    ];

    return (
        <div className="py-10 bg-gray-100 dark:bg-gray-800">
            <h1 className="text-center font-bold text-2xl  text-gray-900 dark:text-gray-300">Our Competitive Advantage</h1>
            <p className="text-center mt-2 text-sm sm:text-base max-w-2xl mx-auto  text-gray-900 dark:text-gray-300">
                We provide cutting-edge learning solutions tailored to individual needs, ensuring a top-tier educational experience for all learners.
            </p>
            <div className="w-full mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 max-w-3xl place-items-center mx-auto">
                    {FeaturesData.map((item, index) => (
                        <Feature key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;

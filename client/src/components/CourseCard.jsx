import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function CourseCard({ course }) {
    const { title, instructor, price, rating, students, image } = course;

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={i} className="text-yellow-400" />);
        if (halfStar) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
        while (stars.length < 5) stars.push(<FaRegStar key={stars.length} className="text-gray-400" />);
        return stars;
    }; ``

    return (
        <div className="bg-white dark:bg-gray-800 border border-blue-500 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={image} loading="lazy" alt={title} height={160} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">by {instructor}</p>
                <div className="flex items-center space-x-1 mt-2">{renderStars()}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{students} students</p>
                <p className="text-lg font-bold text-blue-500 mt-2">${price}</p>
            </div>
        </div>
    );
}

export default CourseCard;

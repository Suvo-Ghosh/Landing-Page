import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "John Doe",
        role: "Software Engineer",
        text: "This platform has transformed my learning experience! The UI is intuitive and the courses are well-structured.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sarah Smith",
        role: "Product Designer",
        text: "I love how personalized and engaging the lessons are. It's truly a game-changer in education!",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Brown",
        role: "Data Scientist",
        text: "The analytics and insights provided helped me track my progress effectively. Highly recommend!",
        image: "https://randomuser.me/api/portraits/men/50.jpg"
    }
];

function TestimonialCarousel() {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 ">
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                    What Our Users Say
                </h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop
                    className="relative"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center text-center bg-white dark:bg-gray-800 border border-blue-500  p-6 rounded-lg shadow-lg">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                loading="lazy"
                                className="w-16 h-16 rounded-full mb-4 border-2 mx-auto border-blue-500"
                            />
                            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                                "{testimonial.text}"
                            </p>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TestimonialCarousel;

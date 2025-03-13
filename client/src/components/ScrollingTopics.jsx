import React from "react";

const topics1 = [
    "Node.js", "MongoDB", "React", "Redux", "GraphQL",
    "Tailwind CSS", "Security", "Testing", "Next.js", "Express",
    "TypeScript", "Hoisting", "Webpack", "Bun", "REST API"
];

const topics2 = [
    "Authentication", "Routing", "IndexedDB", "State Management",
    "Tailwind CSS", "Security", "Middleware", "Next.js", "Concurrency",
    "Live Project", "Hooks", "Asynchronous", "Webhook", "REST API"
];

const ScrollingTopics = () => {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-screen-lg mx-auto py-8 relative">
                <h2 className="text-2xl font-bold text-center dark:text-white mb-4">
                    100+ Topics Taught...
                </h2>

                {/* First Scrolling Row with Unified Blur Effect */}
                <div className="relative w-full overflow-hidden h-12">
                    {/* Blur Effect in a Single Div */}
                    <div className="absolute inset-0 h-full bg-gradient-to-r from-gray-100 from-[2%] via-transparent via-[15%] to-gray-100 to-[99%] dark:from-gray-800 dark:to-gray-800 pointer-events-none z-10"></div>

                    <div className="flex gap-6 absolute left-0 w-max animate-scroll">
                        {[...topics1, ...topics1].map((topic, index) => (
                            <div
                                key={index}
                                className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-sm whitespace-nowrap"
                            >
                                {topic}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Scrolling Row (Opposite Direction) */}
                <div className="relative w-full overflow-hidden h-12 mt-2 sm:mt-4 md:mt-6">
                    {/* Blur Effect in a Single Div */}
                    <div className="absolute inset-0 h-full bg-gradient-to-r from-gray-100 from-[2%] via-transparent via-[30%] to-gray-100 to-[99%] dark:from-gray-800 dark:to-gray-800 pointer-events-none z-10"></div>
                    <div className="flex gap-6 absolute left-0 w-max animate-infinite-scroll">
                        {[...topics2, ...topics2].map((topic, index) => (
                            <div
                                key={index}
                                className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-sm whitespace-nowrap"
                            >
                                {topic}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollingTopics;

import React, { useState } from "react";
import CourseCard from "./CourseCard";

const coursesData = [
    {
        title: "React for Beginners",
        instructor: "John Doe",
        price: 49.99,
        rating: 4.5,
        students: "12,345",
        image: "https://tse3.mm.bing.net/th?id=OIP.x0d41ns8PTQZz4a3VbMrBgHaEK&pid=Api&P=0&h=180", // React-related image
        category: "Web Development"
    },
    {
        title: "Advanced JavaScript",
        instructor: "Sarah Smith",
        price: 39.99,
        rating: 4.7,
        students: "8,210",
        image: "https://analyticsindiamag.com/wp-content/uploads/2019/11/javascript.png", // JavaScript-related image
        category: "Web Development"
    },
    {
        title: "UI/UX Design Fundamentals",
        instructor: "Michael Brown",
        price: 29.99,
        rating: 4.8,
        students: "15,678",
        image: "https://assets-global.website-files.com/5f6bd5d85587b65348960e08/617c6ced59cb821a2cbee7d5_UI%202.png", // Design-related image
        category: "Web Development"
    },
    {
        title: "Node.js & Express Mastery",
        instructor: "Emily Wilson",
        price: 59.99,
        rating: 4.6,
        students: "9,120",
        image: "https://i.ytimg.com/vi/45dAt9Gz8rE/maxresdefault.jpg", // Node.js-related image
        category: "Web Development"
    },
    {
        title: "Machine Learning A-Z",
        instructor: "Andrew Ng",
        price: 79.99,
        rating: 4.9,
        students: "25,678",
        image: "https://www.techupdatesdaily.com/wp-content/uploads/2019/12/What-Is-Machine-Learning1-768x512.jpg", // Machine Learning-related image
        category: "AI/ML"
    },
    {
        title: "Deep Learning with Python",
        instructor: "Geoffrey Hinton",
        price: 89.99,
        rating: 4.8,
        students: "18,543",
        image: "https://ded9.com/wp-content/uploads/2020/12/bf98427722-1024x568.jpg", // Deep Learning-related image
        category: "AI/ML"
    },
    {
        title: "Data Science with Python",
        instructor: "Jake VanderPlas",
        price: 69.99,
        rating: 4.7,
        students: "22,120",
        image: "https://railsware.com/blog/wp-content/uploads/2018/10/Python-for-Data-Science-illustration.jpg", // Data Science-related image
        category: "Data Science"
    },
    {
        title: "SQL for Data Analysis",
        instructor: "Emily Carter",
        price: 34.99,
        rating: 4.6,
        students: "14,789",
        image: "https://dataschoolnigeria.com.ng/wp-content/uploads/2021/10/SQL-for-Data-analysis-training-in-Abuja-Nigeria.jpg", // SQL-related image
        category: "Data Science"
    },
    {
        title: "Cybersecurity Fundamentals",
        instructor: "Kevin Mitnick",
        price: 55.99,
        rating: 4.8,
        students: "10,234",
        image: "https://i.ytimg.com/vi/VdQIe3Zzxvs/maxresdefault.jpg", // Cybersecurity-related image
        category: "Cybersecurity"
    },
    {
        title: "Ethical Hacking & Penetration Testing",
        instructor: "Bruce Schneier",
        price: 74.99,
        rating: 4.7,
        students: "13,567",
        image: "https://i2.wp.com/hackersonlineclub.com/wp-content/uploads/2019/10/Ethical-Hacking-Intro.png?fit=709%2C396", // Hacking-related image
        category: "Cybersecurity"
    },
    {
        title: "AWS Certified Solutions Architect",
        instructor: "Jeff Barr",
        price: 99.99,
        rating: 4.9,
        students: "30,234",
        image: "https://webmagicinformatica.com/wp-content/uploads/2022/03/AWS-Certified-Solutions-Architect-SAA-C003.png", // AWS-related image
        category: "Cloud Computing"
    },
    {
        title: "Docker & Kubernetes for DevOps",
        instructor: "Kelsey Hightower",
        price: 79.99,
        rating: 4.8,
        students: "17,654",
        image: "https://static.wixstatic.com/media/cf8e1e_b44ec3327dab424aa208861f8d82c108~mv2.png/v1/fill/w_925,h_520,al_c,q_90,enc_auto/cf8e1e_b44ec3327dab424aa208861f8d82c108~mv2.png", // DevOps-related image
        category: "DevOps"
    },
    {
        title: "Linux System Administration",
        instructor: "Linus Torvalds",
        price: 59.99,
        rating: 4.7,
        students: "11,890",
        image: "https://i.ytimg.com/vi/JnhWJbZzL58/maxresdefault.jpg", // Linux-related image
        category: "DevOps"
    }
];


const categories = ["All", "Web Development", "Data Science", "DevOps", "Cloud Computing", "Cybersecurity", "AI/ML"];

function Courses() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredCourses =
        selectedCategory === "All"
            ? coursesData
            : coursesData.filter((course) => course.category === selectedCategory);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-[1000px] mx-auto py-10 px-4">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                    Top Courses
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium 
              ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}
              hover:bg-blue-400 hover:text-white transition`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 -z-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredCourses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;

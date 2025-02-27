import React from "react";
import { FaBookOpen, FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-container bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-300 flex flex-col w-full py-6 transition-colors duration-300"  >
            <div className="footer-content w-full max-w-[1000px] mx-auto">
                <div className="footer-top flex flex-col justify-center sm:flex-row gap-6">
                    <div className="footer-top-left flex flex-col items-center text-center sm:text-left">
                        <a href="#" className="logo flex items-center gap-2">
                            <FaBookOpen className="text-2xl" />
                            <span className="text-xl font-semibold">StudyBuddy</span>
                        </a>
                        <p className="mt-2 text-sm text-center">Seamless Learning for a Brighter Future</p>
                        <div className="social-media flex gap-3 mt-3">
                            <a href="https://www.instagram.com" target="_blank" className="text-xl hover:text-gray-400"><FaInstagram /></a>
                            <a href="https://www.facebook.com" target="_blank" className="text-xl hover:text-gray-400"><FaFacebook /></a>
                            <a href="https://www.linkedin.com" target="_blank" className="text-xl hover:text-gray-400"><FaLinkedin /></a>
                            <a href="https://www.google.com" target="_blank" className="text-xl hover:text-gray-400"><FaGoogle /></a>
                        </div>
                    </div>
                    <div className="footer-top-right grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <ul className="grid-item justify-self-center ">
                            <li className="font-bold text-lg">Product</li>
                            <li><a href="#" className="hover:text-gray-400">Overview</a></li>
                            <li><a href="#" className="hover:text-gray-400">Solution</a></li>
                            <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
                            <li><a href="#" className="hover:text-gray-400">Customers</a></li>
                        </ul>
                        <ul className="grid-item justify-self-center ">
                            <li className="font-bold text-lg">Company</li>
                            <li><a href="#About" className="hover:text-gray-400">About</a></li>
                            <li><a href="#" className="hover:text-gray-400">Investor Relation</a></li>
                            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-400">Press</a></li>
                            <li><a href="#" className="hover:text-gray-400">Jobs</a></li>
                        </ul>
                        <ul className="grid-item justify-self-center ">
                            <li className="font-bold text-lg">Support</li>
                            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-400">Document</a></li>
                            <li><a href="#" className="hover:text-gray-400">Chat</a></li>
                            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                        </ul>
                        <ul className="grid-item justify-self-center ">
                            <li className="font-bold text-lg">Legal</li>
                            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Cookie Settings</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom mt-6 text-center text-sm border-t border-gray-600 pt-4">
                    <p>© 2025 StudyBuddy. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

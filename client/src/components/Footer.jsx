import React from 'react'
import { FaBookOpen, FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <div className="footer-container bg-green-600 flex flex-col w-full" id="About">
            <div className="footer-content w-full bg-red-600  max-w-[900px] mx-auto">
                <div className="footer-top flex flex-col justify-center sm:flex-row">
                    <div className="footer-top-left flex flex-col items-center ">
                        <a href="#" className="logo flex">
                            <FaBookOpen className='mt-1.5' />
                            <span className="logo-text">StudyBuddy</span>
                        </a>
                        <p>Seamless Learning for Brighter Future</p>
                        <div className="socal-media flex">
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"> <FaLinkedin /></a>
                            <a href="#"> <FaGoogle /></a>
                        </div>
                    </div>
                    <div className="footer-top-right grid   grid-cols-2 sm:grid-cols-4">
                        <ul className="grid-item justify-self-center ">
                            <li className="all-items font-bold">Product</li>
                            <li className="all-items"><a href="#">Overview</a></li>
                            <li className="all-items"><a href="#">Solution</a></li>
                            <li className="all-items"><a href="#">Pricing</a></li>
                            <li className="all-items"><a href="#">Customers</a></li>
                        </ul>
                        <ul className="grid-item justify-self-center">
                            <li className="all-items font-bold">Company</li>
                            <li className="all-items"><a href="#About">About</a></li>
                            <li className="all-items"><a href="#">Investor Relation</a></li>
                            <li className="all-items"><a href="#">Blog</a></li>
                            <li className="all-items"><a href="#">Press</a></li>
                            <li className="all-items"><a href="#">Jobs</a></li>
                        </ul>
                        <ul className="grid-item justify-self-center">
                            <li className="all-items font-bold">Support</li>
                            <li className="all-items"><a href="#">Contact</a></li>
                            <li className="all-items"><a href="#">Document</a></li>
                            <li className="all-items"><a href="#">Chat</a></li>
                            <li className="all-items"><a href="#">FAQ</a></li>
                        </ul>
                        <ul className="grid-item justify-self-center">
                            <li className="all-items font-bold">Legal</li>
                            <li className="all-items"><a href="#">Terms of Service</a></li>
                            <li className="all-items"><a href="#">Privacy Policy</a></li>
                            <li className="all-items"><a href="#">Cookie Seeting</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottam">
                    <p className='text-center'>StudyBuddy All Copyright © 2024 reserve</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
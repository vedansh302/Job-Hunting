import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 mt-8 rounded-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">

                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                        <h2 className="text-2xl font-bold text-white">JobHunting</h2>
                        <p className="mt-2">Find your dream job here!</p>
                    </div>

                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/jobs" className="hover:underline">Jobs</a></li>
                            <li><a href="/post-job" className="hover:underline">Post a Job</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/3">
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <p>Email: contact@JohHunting.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <div className="flex mt-4 space-x-4">

                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook"></i> {/* FontAwesome icons */}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; 2024 Jobify. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


export default Footer
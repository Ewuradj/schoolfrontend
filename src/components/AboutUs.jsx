import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div>
            <div>
                <section className="bg-gray-100">
                    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-extrabold text-black-900 sm:text-4xl">
                                    About Us
                                </h2>
                                <p className="mt-4 text-gray-600 text-lg">
                                Welcome to the SchoolConnect, your go-to platform for connecting parents with schools in their local area. Our mission is to simplify the school selection process and empower parents to make informed decisions about their child's education. We invite you to explore SchoolConnect, discover the diverse range of educational opportunities available.
                                </p>
                                <div className="mt-8">
                                    <Link to="/aboutpage" className="text-blue-500 hover:text-blue-600 font-medium">
                                        Learn more about us
                                        <span className="ml-2">→</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <img
                                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                                    alt="About Us Image"
                                    className="object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default AboutUs
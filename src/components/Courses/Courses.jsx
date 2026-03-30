import React, { use } from "react";

const Courses = ({ coursesPromise }) => {
    const courses = use(coursesPromise);

    // console.log(courses);
    return (
        <div className="max-w-10/12 mx-auto py-20 mb-16">
            <div className="text-center space-y-4 mb-16">
                <h2 className="font-extrabold text-5xl text-[#101727]">
                    Premium Digital Tools
                </h2>
                <p className="text-[16px] font-normal text-[#627382]">
                    Choose from our curated collection of premium digital products
                    designed to boost your productivity and creativity.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {courses.map((course) => (
                    <div key={course.id} className="space-y-4 shadow-xl rounded-lg  p-5 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] relative">
                        <div className="p-3 bg-white rounded-full shadow-md w-fit">
                            <img src={course.icon} alt="" />
                        </div>

                        <div
                            className={`px-3 py-1 rounded-full text-sm font-medium w-fit absolute right-3 top-3
                           ${course.tag === "best seller" && "bg-yellow-100 text-red-400"}
                           ${course.tag === "popular" && "bg-purple-100 text-purple-600"}
                           ${course.tag === "new" && "bg-green-100 text-green-600"}`}
                           >

                            {course.tag}

                        </div>
                        
                        <div>
                            <h2 className="text-3xl font-bold mb-3">{course.name}</h2>
                            <p className="text-[16px] font-normal text-[#627382]">
                                {course.description}
                            </p>
                        </div>
                        <div>
                            <span className="font-black text-4xl">${course.price}</span>
                            <span className=" font-normal text-[#627382]">/Month</span>
                        </div>
                        <div>
                            {course.features.map((feature,index) => (
                                <ul key={index} className="mt-3 flex flex-col gap-2 text-xs flex-1">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 me-2 inline-block text-success"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-[16px] font-normal text-[#627382]">
                                            {feature}
                                        </span>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300 text-sm sm:text-base w-full">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;

import React, { use } from "react";
import CourseCard from "./CourseCard";
import Tabs from "../Tabs/Tabs";
import Cart from "../Cart/Cart";

const Courses = ({ coursesPromise, activeTab, setActiveTab }) => {
    const courses = use(coursesPromise);

    // console.log(courses);
    return (

        
        <div className="max-w-10/12 mx-auto py-20 mb-16">
            <div className="text-center space-y-4 mb-6">
                <h2 className="font-extrabold text-5xl text-[#101727]">
                    Premium Digital Tools
                </h2>
                <p className="text-[16px] font-normal text-[#627382]">
                    Choose from our curated collection of premium digital products
                    designed to boost your productivity and creativity.
                </p>
            </div>

            <div className="mb-14">
                <Tabs activeTab={activeTab} 
    setActiveTab={setActiveTab} ></Tabs>
            </div>

            {activeTab === "product" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

      {activeTab === "cart" && (
        <Cart /> 
      )}
        </div>
    );
};

export default Courses;

import RecentlyCourses from "./feature/LogIn/HomeFeatures/Courses/RecentlyCourses";
import Instructor from "./assets/Instructor.svg";
import { ArrowRight } from "phosphor-react";
import Instructors from "./feature/LogIn/HomeFeatures/Instructors/InstructorsPage";
import Companies from "./assets/Companies.svg";
import PopularToolsSection from "./feature/LogIn/HomeFeatures/Courses/PopularTools";
import CoursesBest from "./feature/LogIn/HomeFeatures/Courses/CousesPage";
import CoursesTeste from "./feature/LogIn/HomeFeatures/Courses/Courses";

export default function Home() {
  return (
    <div>
      <CoursesBest />

      <PopularToolsSection />
      <Instructors />
      <CoursesTeste/>

      <div className="flex items-center justify-center bg-gray-100 py-20 px-10">
        <div className="flex flex-col md:flex-row w-full max-w-full overflow-hidden">
          <div className="relative flex items-center justify-center mr-6">
            <img
              src={Instructor}
              alt="Instructor"
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-10 left-5 bg-white text-orange-500 font-bold px-6 py-3  flex items-center gap-6 shadow-md hover:bg-orange-50 transition">
              Start Teaching <ArrowRight />
            </button>
          </div>

          <div className="p-10 md:w-1/2 bg-white">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Your teaching & earning steps
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 font-bold w-12 h-12 rounded-full flex items-center justify-center">
                  1
                </span>
                Apply to become instructor
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-red-100 text-red-600 font-bold w-12 h-12 rounded-full flex items-center justify-center">
                  2
                </span>
                Build & edit your profile
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-pink-100 text-pink-600 font-bold w-12 h-12 rounded-full flex items-center justify-center">
                  3
                </span>
                Create your new course
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-green-100 text-green-600 font-bold w-12 h-12 rounded-full flex items-center justify-center">
                  4
                </span>
                Start teaching & earning
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentlyCourses />

      <div className="flex items-center justify-center bg-gray-100 py-20 px-10">
        <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between gap-10">
          <div className="flex flex-col md:w-1/2 p-10">
            <h1 className="font-semibold text-4xl mb-4">
              6.3K trusted companies
            </h1>
            <p className="text-gray-600">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>

          <div className="grid grid-cols-3 w-full h-full">
            <img src={Companies} alt="Company 1" />
            <img src={Companies} alt="Company 1" />
            <img src={Companies} alt="Company 1" />
            <img src={Companies} alt="Company 1" />
            <img src={Companies} alt="Company 1" />
            <img src={Companies} alt="Company 1" />
          </div>
        </div>
      </div>
    </div>
  );
}

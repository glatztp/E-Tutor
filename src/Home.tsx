import { Link } from "react-router-dom";
import HomeImg from "./assets/Images.svg";
import Categories from "./feature/Categories/CategoriesPage";
import Courses from "./feature/Courses/CousesPage";
import FeaturedCourses from "./feature/Courses/FeaturedCourses";
import RecentlyCourses from "./feature/Courses/RecentlyCourses";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between h-full px-20 pt-10 pb-10 bg-gray-100">
        <div className="flex flex-col justify-center w-1/2 pr-8">
          <h1 className="text-6xl font-semibold text-black mb-10">
            Learn with expert anytime anywhere
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Our mission is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </p>
          <Link to="/signup">
            <button className="bg-orange-500 text-white py-3 px-8  hover:bg-orange-600 transition mt-3">
              Create Account
            </button>
          </Link>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src={HomeImg}
            className="w-full max-w-xl -mr-20 "
            alt="Learning Illustration"
          />
        </div>
      </div>
      <Categories />
      <Courses />
      <FeaturedCourses />
      <RecentlyCourses />
    </div>
  );
}

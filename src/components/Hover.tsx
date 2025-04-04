import {
  Clock,
  Users,
  ChartLine,
  ShoppingCart,
  Heart,
} from "phosphor-react";
import Avatar from "../assets/Avatar.svg";
import { CourseType } from "../feature/Courses/types/CourseType";
import { useState } from "react";

type Props = {
  course: CourseType;
};

export default function CourseHoverCard({ course }: Props) {
  const [liked, setLiked] = useState(false); 

  return (
    <div className="absolute border top-0 bg-white shadow-xl p-6 w-80 z-10">
      <span className="text-xs font-bold uppercase px-2 py-1 ">
        {course.category}
      </span>
      <h3 className="text-lg font-bold mt-2">{course.title}</h3>

      <div className="flex items-center mt-2 text-sm text-gray-600">
        <img
          src={Avatar}
          alt="Author"
          className="w-6 h-6 rounded-full mr-2"
        />
        {course.author}
      </div>

      <div className="flex items-center mt-3 text-sm text-gray-600">
        <Users className="text-purple-400 mr-2" size={26} /> {course.students}
        <ChartLine className="ml-4 text-orange-400 mr-2" size={26} />
        {course.level}
        <Clock className="ml-4 text-green-500 mr-2" size={26} />
        {course.duration}
      </div>

      <div className="flex items-center mt-4">
        <span className="text-red-500 font-bold text-lg">
          {course.finalPrice}
        </span>
        <span className="text-gray-400 text-sm ml-2 line-through">
          {course.discount}
        </span>
        <span className="ml-2 bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded">
          56% OFF
        </span>

        <Heart
          className={`ml-auto cursor-pointer  hover:text-orange-500 transition-all duration-200 hover:scale-105${
            liked ? "text-orange-500" : "text-gray-400"
          }`}
          size={20}
          weight={liked ? "fill" : "regular"}
          onClick={() => setLiked(!liked)}
        />
      </div>

      <ul className="mt-4 text-sm text-gray-600">
        {course.learn.map((item, idx) => (
          <li key={idx} className="flex items-start mt-2">
            ✅ <span className="ml-2">{item}</span>
          </li>
        ))}
      </ul>

      <button className="mt-4 bg-orange-500 text-white px-4 py-2 flex items-center justify-center w-full hover:bg-orange-600 transition-all duration-200">
        <ShoppingCart className="mr-2" size={18} /> Add To Cart
      </button>
      <button className="mt-2 border border-orange-500 text-orange-500 px-4 py-2 flex items-center justify-center w-full hover:bg-orange-500 hover:text-white transition-all duration-200">
        Course Detail
      </button>
    </div>
  );
}

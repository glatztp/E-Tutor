import { Star, Clock, Users, ChartLine } from "phosphor-react";
import Desing from "../../assets/Desing.svg";
import Business from "../../assets/Bussines.svg";
import Dev from "../../assets/Dev.svg";
import Marketing from "../../assets/Marketing.svg";
import Avatar from "../../assets/Avatar.svg";

export default function FeaturedCourses() {
  const categoryColors: Record<string, { bg: string; text: string }> = {
    "HEALTH & FITNESS": { bg: "bg-green-100", text: "text-green-600" },
    "PERSONAL DEVELOPMENT": { bg: "bg-red-100", text: "text-red-600" },
    PRODUCTIVITY: { bg: "bg-gray-200", text: "text-gray-700" },
    MUSIC: { bg: "bg-yellow-100", text: "text-yellow-600" },
  };

  const courses = [
    {
      category: "HEALTH & FITNESS",
      title: "Investing In Stocks The Complete Course! (13 H...)",
      price: "$14.00",
      oldPrice: "$26.00",
      rating: "5.0",
      reviews: "357,914",
      students: "265.7K",
      level: "Beginner",
      duration: "6 hours",
      author: "Kevin Gilbert",
      image: Desing,
    },
    {
      category: "PERSONAL DEVELOPMENT",
      title: "Google Analytics Certification - Learn How To...",
      price: "$14.00",
      oldPrice: "$26.00",
      rating: "5.0",
      reviews: "357,914",
      students: "265.7K",
      level: "Beginner",
      duration: "6 hours",
      author: "Kevin Gilbert",
      image: Dev,
    },
    {
      category: "PRODUCTIVITY",
      title: "Adobe XD for Web Design: Essential Principles",
      price: "$14.00",
      oldPrice: "$26.00",
      rating: "5.0",
      reviews: "357,914",
      students: "265.7K",
      level: "Beginner",
      duration: "6 hours",
      author: "Kevin Gilbert",
      image: Business,
    },
    {
      category: "MUSIC",
      title: "The Python Mega Course: Build 10 Real World...",
      price: "$14.00",
      oldPrice: "$26.00",
      rating: "5.0",
      reviews: "357,914",
      students: "265.7K",
      level: "Beginner",
      duration: "6 hours",
      author: "Kevin Gilbert",
      image: Marketing,
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="py-16 px-8 max-w-6xl mx-auto bg-white shadow-lg ">
        <div className="flex mb-8">
          <h2 className="text-4xl font-bold mb-3">Our feature courses</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-lg ml-56 mt-3">
            Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
            varius purus et eleifend porta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border hover:border-orange-500 shadow-md flex overflow-hidden  hover:text-orange-500 transition-all duration-200 hover:shadow-xl hover:scale-105 hover:cursor-pointer"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-40 h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-center">
                  <span
                    className={`text-xs font-bold uppercase px-2 py-1  ${
                      categoryColors[course.category]?.bg
                    } ${categoryColors[course.category]?.text} mb-2 w-fit`}
                  >
                    {course.category}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {course.price}
                  </span>
                  <span className="text-gray-400 text-xs line-through ml-2">
                    {course.oldPrice}
                  </span>
                </div>
                <h3 className="text-sm font-semibold mt-1">{course.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-gray-500 text-xs flex items-center mt-1">
                    <img src={Avatar} alt="Author" className="w-5 h-5  mr-1" />
                    {course.author}
                  </div>

                  <div className="flex items-center mt-1 text-xs text-gray-600">
                    <span className="text-orange-500 flex items-center mr-1">
                      <Star weight="fill" className="mr-1" size={12} />{" "}
                      {course.rating}
                    </span>
                    <span className="text-gray-500 text-xs">
                      ({course.reviews})
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex items-center"></div>

                <div className="flex items-center text-gray-500 mt-3 text-xs border-t pt-4 font-semibold">
                  <Users className="mr-2 text-purple-400" size={26} />{" "}
                  {course.students}
                  <ChartLine
                    className="ml-14 mr-2 text-orange-400"
                    size={26}
                  />{" "}
                  {course.level}
                  <Clock className="ml-12 mr-2 text-green-500" size={26} />{" "}
                  {course.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

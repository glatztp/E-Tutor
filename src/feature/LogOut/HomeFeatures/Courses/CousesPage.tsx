import { Star } from "phosphor-react";
import Desing from "../../../assets/Desing.svg";
import Business from "../../../assets/Bussines.svg";
import Dev from "../../../assets/Dev.svg";
import Marketing from "../../../assets/Marketing.svg";
import IT from "../../../assets/IT.svg";

export default function Courses() {
  const categoryColors: Record<string, { bg: string; text: string }> = {
    DESIGN: { bg: "bg-orange-100", text: "text-orange-500" },
    DEVELOPMENT: { bg: "bg-purple-100", text: "text-purple-500" },
    BUSINESS: { bg: "bg-green-100", text: "text-green-500" },
    MARKETING: { bg: "bg-purple-100", text: "text-purple-500"},
    MUSIC: { bg: "bg-yellow-100", text: "text-yellow-600" },
    "HEALTH & FITNESS": { bg: "bg-green-100", text: "text-green-600" },
    LYFESTYLE: { bg: "bg-yellow-100", text: "text-yellow-600" },
    "IT & SOFTWARE": {  bg: "bg-red-100", text: "text-red-600" },
  };

  const courses = [
    {
      category: "DESIGN",
      title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: Desing,
    },
    {
      category: "DEVELOPMENT",
      title: "The Complete 2021 Web Development Bootcamp",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: Dev,
    },
    {
      category: "BUSINESS",
      title: "Learn Python Programming Masterclass",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: Business,
    },
    {
      category: "MARKETING",
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: Marketing,
    },
    {
      category: "IT & SOFTWARE",
      title: "Reiki Level I, II and Master/Teacher Program",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: IT,
    },
    {
      category: "MUSIC",
      title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: Desing,
    },
    {
      category: "MARKETING",
      title: "The Complete 2021 Web Development Bootcamp",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: Dev,
    },
    {
      category: "HEALTH & FITNESS",
      title: "Learn Python Programming Masterclass",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: Business,
    },
    {
      category: "DESIGN",
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: Marketing,
    },
    {
      category: "LYFESTYLE",
      title: "Reiki Level I, II and Master/Teacher Program",
      price: "$57",
      rating: "5.0",
      students: "265.7K students",
      image: IT,
    },
  ];

  return (
    <div className="text-center py-20 px-10 bg-gray-50">
      <h2 className="text-4xl font-bold mb-16">Best Selling Courses</h2>
      <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg overflow-hidden flex flex-col h-full hover:text-orange-500 transition-all duration-200 hover:shadow-xl hover:scale-105 hover:cursor-pointer"
            onClick={() => console.log(`${course.title}`)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-30 object-cover"
            />
            <div className="p-3 text-left flex flex-col flex-grow">
              <div className="flex justify-between items-center">
                <span
                  className={`text-xs font-bold uppercase p-1 ${
                    categoryColors[course.category]?.bg || "bg-gray-100"
                  } ${categoryColors[course.category]?.text || "text-gray-500"} mb-2`}
                >
                  {course.category}
                </span>
                <span className="text-red-500 font-bold text-md items-center flex">
                  {course.price}
                </span>
              </div>
              <h3 className="text-sm font-semibold mt-2 leading-tight flex-grow mb-5">
                {course.title}
              </h3>
              <div className="mt-auto pt-2 border-t border-gray-200 flex justify-between items-center">
                <span className="text-orange-500 text-xs flex items-center">
                  <Star weight="fill" className="mr-1" />
                  {course.rating}
                </span>
                <span className="text-gray-500 text-xs font-semibold">
                  {course.students}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

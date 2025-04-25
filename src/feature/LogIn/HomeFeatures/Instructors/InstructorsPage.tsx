import { Star } from "phosphor-react";
import Desing from "../../../../assets/Image.svg";

export default function Intructors() {
  const instrutors = [
    {
      name: "Deon Lane",
      title: "Digital Marketing Masterclass",

      rating: "4.9",
      students: "854 students",
      image: Desing,
    },
    {
      name: "Darrell McCarthy",
      title: "Digital Marketing Masterclass",

      rating: "4.6",
      students: "451,444 students",
      image: Desing,
    },
    {
      name: "Jane Doe",
      title: "Digital Marketing Masterclass",
      rating: "4.7",
      students: "435,671 students",
      image: Desing,
    },
    {
      name: "John Smith",
      title: "Digital Marketing Masterclass",
      rating: "4.8",
      students: "265.7K students",
      image: Desing,
    },
    {
      name: "Kevin Gilbert",
      title: "Digital Marketing Masterclass",
      rating: "4.2",
      students: "265.7K students",
      image: Desing,
    },
  ];

  return (
    <div className="text-center py-30 px-30 bg-gray-100 mt-10">
      <div className="bg-white border pt-20 pb-32 px-10 mr-5 ml-5">
        <h2 className="text-4xl font-bold mb-16">
          Popular Instructor in Web Development
        </h2>
        <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto">
          {instrutors.map((course, index) => (
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
                <h3 className="text-lg font-semibold mt-2 leading-tight flex-grow mb-5 text-center">
                  {course.name}
                </h3>
                <h3 className="text-sm  mt-0 leading-tight flex-grow mb-5 text-center">
                  {course.title}
                </h3>
                <div className="mt-auto pt-2 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-black text-sm flex items-center">
                    <Star weight="fill" className="mr-1 text-orange-500" />
                    {course.rating}
                  </span>
                  <span className="text-gray-500 text-sm font-semibold">
                    {course.students}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

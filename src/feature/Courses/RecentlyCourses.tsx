import { useRef, useState } from "react";
import { Star, User, Users } from "phosphor-react";
import Hover from "../../components/Hover";
import { courses } from "../Courses/data/courses";

export default function RecentlyCourses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverPos, setHoverPos] = useState({ top: 0, left: 0 });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const card = cardsRef.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      const containerRect = card.offsetParent?.getBoundingClientRect();

      const isLastInRow = (index + 1) % 4 === 0;

      const left = isLastInRow
        ? rect.left - (containerRect?.left ?? 0) - 320
        : rect.right - (containerRect?.left ?? 0) + 10;

      const top = rect.top - (containerRect?.top ?? 0);

      setHoverPos({ top, left });
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 relative mb-32">
      <h2 className="text-4xl font-bold text-center mt-20">
        Recently added courses
      </h2>

      <div className="relative mt-20" onMouseLeave={handleMouseLeave}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="relative bg-white shadow-lg overflow-hidden cursor-pointer transition-transform   border-2 hover:border-orange-500"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {course.category}
                  </span>
                  <span className="text-red-500 font-bold text-lg mt-2 block">
                    {course.price}
                  </span>
                </div>
                <h3 className="text-md font-semibold mt-1">{course.title}</h3>
                <div className="mt-auto pt-2 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-orange-500 text-xs flex items-center">
                    <Star weight="fill" className="" />
                    {course.rating}
                  </span>
                  <span className="text-gray-500 text-xs font-semibold">
                    <Users className="mr-1" /> {course.students}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hoveredIndex !== null && (
          <div
            className="absolute z-50 transition-all duration-300"
            style={{ top: hoverPos.top, left: hoverPos.left }}
          >
            <Hover course={courses[hoveredIndex]} />
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        <button className="bg-orange-100 text-orange-500 px-6 py-3 text-sm font-semibold">
          Browse All Courses →
        </button>
      </div>
    </div>
  );
}

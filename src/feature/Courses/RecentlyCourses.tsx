import { useRef, useState } from "react";
import { Star, Users } from "phosphor-react";
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
    <div className="max-w-6xl mx-auto py-16 relative">
      <h2 className="text-2xl font-bold text-center mb-8">Recently added courses</h2>

      <div className="relative" onMouseLeave={handleMouseLeave}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative bg-white shadow-lg overflow-hidden cursor-pointer transition-transform   border-2 hover:border-orange-500"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs font-bold uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {course.category}
                </span>
                <h3 className="text-md font-semibold mt-1">{course.title}</h3>
                <div className="flex items-center mt-2 text-gray-500 text-sm">
                  <Star weight="fill" className="text-orange-400 mr-1" size={14} /> {course.rating}
                  <Users className="ml-2 text-purple-400 mr-1" size={14} /> {course.students}
                </div>
                <span className="text-red-500 font-bold text-lg mt-2 block">{course.price}</span>
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
        <button className="bg-orange-100 text-orange-500 px-6 py-3 text-sm font-bold">
          Browse All Courses →
        </button>
      </div>
    </div>
  );
}

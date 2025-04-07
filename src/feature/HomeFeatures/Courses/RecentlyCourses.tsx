import { useRef, useState } from "react";
import { Star, Users } from "phosphor-react";
import Hover from "../../../components/Hover";
import { courses } from "../Courses/data/courses";

export default function RecentlyCourses() {
  const categoryColors: Record<string, { bg: string; text: string }> = {
    DESIGN: { bg: "bg-orange-100", text: "text-orange-500" },
    DEVELOPMENTS: { bg: "bg-purple-100", text: "text-purple-500" },
    BUSINESS: { bg: "bg-green-100", text: "text-green-500" },
    MARKETING: { bg: "bg-purple-100", text: "text-purple-500" },
    MUSIC: { bg: "bg-yellow-100", text: "text-yellow-600" },
    "HEALTH & FITNESS": { bg: "bg-green-100", text: "text-green-600" },
    LYFESTYLE: { bg: "bg-yellow-100", text: "text-yellow-600" },
    "IT & SOFTWARE": { bg: "bg-red-100", text: "text-red-600" },
  };
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
              <div className="bg-white overflow-hidden flex flex-col h-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-xs font-bold uppercase p-1 ${
                          categoryColors[course.category]?.bg || "bg-gray-100"
                        } ${
                          categoryColors[course.category]?.text ||
                          "text-gray-500"
                        } mb-2`}
                      >
                        {course.category}
                      </span>
                      <span className="text-red-500 font-bold text-lg">
                        {course.price}
                      </span>
                    </div>
                    <h3 className="text-md font-semibold mt-2">
                      {course.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-gray-200 flex justify-between items-center mt-4">
                    <span className="text-black text-sm flex items-center font-semibold gap-1">
                      <Star
                        weight="fill"
                        className="text-orange-500"
                        size={18}
                      />{" "}
                      {course.rating}
                    </span>
                    <span className="text-gray-500 text-sm font-semibold flex items-center gap-3">
                      <Users
                        size={18}
                        className="text-purple-500"
                        weight="regular"
                      />{" "}
                      {course.students}
                    </span>
                  </div>
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

      <div className="text-center mt-8 -mb-20">
        <button className="bg-orange-100 text-orange-500 px-6 py-3 text-sm font-semibold">
          Browse All Courses →
        </button>
      </div>
    </div>
  );
}

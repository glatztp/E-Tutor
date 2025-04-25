import { useState } from "react";
import { SlidersHorizontal, CaretDown, MagnifyingGlass } from "phosphor-react";
import Course from "../../../../components/Courses";

export default function CoursesTeste() {
  const categoryColors: Record<string, { bg: string; text: string }> = {
    DESIGN: { bg: "bg-orange-100", text: "text-orange-500" },
    DEVELOPMENT: { bg: "bg-purple-100", text: "text-purple-500" },
    BUSINESS: { bg: "bg-green-100", text: "text-green-500" },
    MARKETING: { bg: "bg-purple-100", text: "text-purple-500" },
    MUSIC: { bg: "bg-yellow-100", text: "text-yellow-600" },
    "HEALTH & FITNESS": { bg: "bg-green-100", text: "text-green-600" },
    LYFESTYLE: { bg: "bg-yellow-100", text: "text-yellow-600" },
    "IT & SOFTWARE": { bg: "bg-red-100", text: "text-red-600" },
  };

  const allCategories = Object.keys(categoryColors);
  const suggestions = [
    "user interface",
    "user experience",
    "web design",
    "interface",
    "app",
  ];
  const sortOptions = ["Trending", "Top Rated", "Most Students"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Trending");
  const [showDropdown, setShowDropdown] = useState(false);

  const courses = [
    { title: "UI Design", category: "DESIGN", rating: 4.8, students: 12345 },
    { title: "Web Dev", category: "DEVELOPMENT", rating: 4.4, students: 19000 },
    { title: "UX Mastery", category: "DESIGN", rating: 4.9, students: 8200 },
  ];

  const getSortedCourses = () => {
    let filtered = [...courses];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((c) =>
        selectedCategories.includes(c.category)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortBy) {
      case "Top Rated":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "Most Students":
        return filtered.sort((a, b) => b.students - a.students);
      default:
        return filtered;
    }
  };

  return (
    <div className="bg-white py-10 px-28">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 ">
            <SlidersHorizontal size={18} weight="bold" />
            <span className="font-semibold text-sm">Filter</span>
            <span className="ml-1 bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold">
              {selectedCategories.length}
            </span>
          </button>

          <div className="flex items-center w-full max-w-md border border-gray-300  px-3 py-2">
            <MagnifyingGlass size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="UI/UX Design"
              className="w-full text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 text-sm font-medium border border-gray-300 px-4 py-2 "
          >
            Sort by: <span className="text-gray-600">{sortBy}</span>
            <CaretDown size={14} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg  border z-10">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setShowDropdown(false);
                  }}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    sortBy === option ? "bg-gray-100 font-semibold" : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-6">
        <span className="mr-2 font-medium text-gray-700">Suggestion:</span>
        {suggestions.map((sug, i) => (
          <span
            key={i}
            className="text-orange-500 mr-3 cursor-pointer hover:underline"
          >
            {sug}
          </span>
        ))}
      </div>

      <Course />
    </div>
  );
}

import { CaretDown, MagnifyingGlass, SlidersHorizontal } from "phosphor-react";
import { useState } from "react";
import Courses from "../../../../components/Courses";
import Business from "../../../../assets/Bussines.svg";
import Desing from "../../../../assets/Desing.svg";
import Dev from "../../../../assets/Dev.svg";
import IT from "../../../../assets/IT.svg";
import Marketing from "../../../../assets/Marketing.svg";

export default function CoursesTeste() {


  const suggestions = [
    "UI Design",
    "Web Dev",
    "UX Mastery",
    "Marketing Basics",
    "IT Essentials",
  ];
  const sortOptions = ["Trending", "Top Rated", "Most Students"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Trending");
  const [showDropdown, setShowDropdown] = useState(false);

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
        students: "264.7K students",
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
        students: "264.7K students",
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
        students: "264.7K students",
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
        students: "264.7K students",
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
        students: "264.7K students",
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
        students: "264.7K students",
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
        students: "264.7K students",
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
    ];

  const getFilteredCourses = () => {
    let filtered = [...courses];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((course) =>
        selectedCategories.includes(course.category)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortBy) {
      case "Top Rated":
        filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case "Most Students":
        filtered.sort(
          (a, b) =>
            parseInt(b.students.replace(/\D/g, "")) -
            parseInt(a.students.replace(/\D/g, ""))
        );
        break;
      default:
        break;
    }

    return filtered;
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  return (
    <div className="bg-gray-50 py-10 px-28">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <SlidersHorizontal size={18} weight="bold" />
            <span className="font-semibold text-sm">Filter</span>
            <span className="ml-1 bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold">
              {selectedCategories.length}
            </span>
          </button>

          <div className="flex items-center w-full max-w-md border border-gray-300 px-3 py-2 rounded-md">
            <MagnifyingGlass size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses"
              className="w-full text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 text-sm font-medium border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Sort by: <span className="text-gray-600">{sortBy}</span>
            <CaretDown size={14} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-md z-10">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setShowDropdown(false);
                  }}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 transition ${
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
        <span className="mr-2 font-medium text-gray-700">Suggestions:</span>
        {suggestions.map((sug, i) => (
          <span
            key={i}
            onClick={() => handleSuggestionClick(sug)}
            className="text-orange-500 mr-3 cursor-pointer hover:underline"
          >
            {sug}
          </span>
        ))}
      </div>

      {/* Passando os cursos filtrados para o componente Courses */}
      <Courses courses={getFilteredCourses()} />
    </div>
  );
}
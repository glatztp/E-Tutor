import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useRef, useState } from "react";

const toolsData = [
  { id: 1, name: "HTML", Courses: "2,345" },
  { id: 2, name: "CSS", Courses: "4,343" },
  { id: 3, name: "JavaScript", Courses: "3,240" },
  { id: 4, name: "Python", Courses: "4,021" },
  { id: 5, name: "SQL", Courses: "3,790" },
  { id: 6, name: "React", Courses: "2,888" },
  { id: 7, name: "Java", Courses: "3,120" },
  { id: 8, name: "C#", Courses: "2,190" },
  { id: 9, name: "C++", Courses: "1,990" },
  { id: 10, name: "Tailwind", Courses: "1,580" },
  { id: 11, name: "Node.js", Courses: "2,450" },
  { id: 12, name: "TypeScript", Courses: "2,210" },
];

const toolsPerPage = 6;

export default function PopularToolsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(toolsData.length / toolsPerPage);

  const toolRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});


  const startIndex = currentPage * toolsPerPage;
  const currentTools = toolsData.slice(startIndex, startIndex + toolsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const scrollToTool = (toolName) => {
    const index = toolsData.findIndex((tool) => tool.name === toolName);
    if (index !== -1) {
      const newPage = Math.floor(index / toolsPerPage);
      setCurrentPage(newPage);
      setTimeout(() => {
        const ref = toolRefs.current[toolName];
        if (ref) {
          ref.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  };

  const keywords = [
    "HTML5", "Web Development", "Responsive Development", 
    "Development", "Programming", "Website", 
    "Technology", "WordPress"
  ];
  

  return (
    <section className="w-full px-4 py-10 sm:px-8">
      <div className="flex items-center justify-between mb-6 px-10">
        <h2 className="text-2xl sm:text-3xl font-bold">Popular Tools</h2>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded font-semibold ${
              currentPage === 0
                ? "cursor-not-allowed text-muted-foreground"
                : "hover:text-orange-500 transition-all duration-200"
            }`}
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold ${
              currentPage === totalPages - 1
                ? "cursor-not-allowed text-muted-foreground"
                : "hover:text-orange-500 transition-all duration-200"
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 text-center px-10">
        {currentTools.map((tool) => (
          <div
            key={tool.id}
            ref={(el) => (toolRefs.current[tool.name] = el)}
            className="border p-4  bg-white dark:bg-zinc-900 hover:shadow-md transition hover:text-orange-500 hover:border-orange-500"
          >
            <h3 className="font-semibold mb-2">{tool.name}</h3>
            <p className="text-sm text-muted-foreground pt-1 opacity-40">
              {tool.Courses} Courses
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 px-10 flex text-center items-center justify-center">
        <h6 className="text-md font-semibold mb-3">Popular Keywords:</h6>
        <div className="flex flex-wrap gap-1 ml-3">
          {keywords.map((key) => (
            <button
              key={key}
              onClick={() => scrollToTool(key)}
              className="px-4 py-2 text-sm font-medium  bg-slate-50 hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

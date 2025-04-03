import { Handshake, Briefcase, ChartBar, ComputerTower, Lightbulb, FileText, Megaphone, Camera, Cube, PenNib, Heartbeat, MusicNote } from "phosphor-react";

export default function Categories() {
  const categories = [
    { name: "Label", courses: "63,476 Courses", color: "bg-purple-100", icon: <Briefcase size={32} weight="bold" /> },
    { name: "Business", courses: "52,822 Courses", color: "bg-green-100", icon: <Handshake size={32} weight="bold" /> },
    { name: "Finance & Accounting", courses: "33,841 Courses", color: "bg-orange-100", icon: <ChartBar size={32} weight="bold" /> },
    { name: "IT & Software", courses: "22,649 Courses", color: "bg-red-100", icon: <ComputerTower size={32} weight="bold" /> },
    { name: "Personal Development", courses: "20,126 Courses", color: "bg-orange-200", icon: <Lightbulb size={32} weight="bold" /> },
    { name: "Office Productivity", courses: "13,932 Courses", color: "bg-gray-100", icon: <FileText size={32} weight="bold" /> },
    { name: "Marketing", courses: "12,068 Courses", color: "bg-purple-200", icon: <Megaphone size={32} weight="bold" /> },
    { name: "Photography & Video", courses: "6,198 Courses", color: "bg-gray-200", icon: <Camera size={32} weight="bold" /> },
    { name: "Lifestyle", courses: "2,736 Courses", color: "bg-orange-200", icon: <Cube size={32} weight="bold" /> },
    { name: "Design", courses: "2,600 Courses", color: "bg-red-100", icon: <PenNib size={32} weight="bold" /> },
    { name: "Health & Fitness", courses: "1,678 Courses", color: "bg-green-200", icon: <Heartbeat size={32} weight="bold" /> },
    { name: "Music", courses: "959 Courses", color: "bg-yellow-100", icon: <MusicNote size={32} weight="bold" /> },
  ];

  return (
    <div className="text-center py-20 mt-0 ">
      <h2 className="text-4xl font-semibold mb-12">Browse top category</h2>
      <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`flex items-center p-5 shadow-md ${cat.color} hover:shadow-lg transition`}
          >
            <span className="text-2xl mr-4 bg-white p-3 opacity-70">{cat.icon}</span>
            <div className="text-left">
              <h3 className="text-sm font-semibold">{cat.name}</h3>
              <p className="text-gray-500 text-sm">{cat.courses}</p>
            </div>
          </button>
        ))}
      </div>
      <p className="mt-6 text-gray-600">
        We have more categories & subcategories.{" "}
        <a href="#" className="text-orange-500 font-semibold">Browse All →</a>
      </p>
    </div>
  );
}

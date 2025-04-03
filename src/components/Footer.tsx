import {
  GraduationCap,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
  AppleLogo,
  GooglePlayLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <footer className="bg-[#1D2026] text-white py-12 px-20">
      <div className="container mx-auto px-8">
      <div className="border-b border-gray-700 pb-8 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 py-10">
        <div className="flex items-center gap-3">
          <h2 className="text-4xl font-semibold">
            Start learning with 67.1k <h2>students around the world.</h2>
          </h2>
        </div>
        <div className="flex gap-16 text-center mr-10">
          <div>
            <h2 className="text-3xl font-semibold">6.3k</h2>
            <p className="text-gray-500">Online Courses</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">26k</h2>
            <p className="text-gray-500">Certified Instructors</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">99.9%</h2>
            <p className="text-gray-500">Success Rate</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-0 justify-center md:justify-start mb-10">
        <button className="bg-orange-500 px-6 py-3 text-white font-medium ">
          Join The Family
        </button>
        <button className="bg-gray-700 px-6 py-3 text-white font-medium ">
          Browse All Courses
        </button>
      </div>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 ">
          <div>
            <div className="flex items-center gap-2 text-4xl font-semibold pb-5">
              <GraduationCap
                size={24}
                weight="regular"
                className="text-orange-500"
              />
              E-tutor
            </div>
            <p className="text-gray-400 mt-2">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
            </p>
            <div className="flex gap-3 mt-7">
              <FacebookLogo
                size={24}
                className="text-gray-400 hover:text-orange-500 trasition-all duration-200"
              />
              <InstagramLogo
                size={24}
                className="text-gray-400 hover:text-orange-500 trasition-all duration-200"
              />
              <LinkedinLogo
                size={24}
                className="text-gray-400 hover:text-orange-500 trasition-all duration-200"
              />
              <TwitterLogo
                size={24}
                className="text-gray-400 hover:text-orange-500 trasition-all duration-200"
              />
              <YoutubeLogo
                size={24}
                className="text-gray-400 hover:text-orange-500 trasition-all duration-200"
              />
            </div>
          </div>

          <div className="ml-9">
            <h3 className="text-lg font-semibold ">TOP 4 CATEGORY</h3>
            <ul className="text-gray-400 mt-5 space-y-5">
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Development</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Finance & Accounting</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Design</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Business</li>
            </ul>
          </div>

          <div className="ml-9">
            <h3 className="text-lg font-semibold">QUICK LINKS</h3>
            <ul className="text-gray-400 mt-5 space-y-5">
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">About</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Become Instructor</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Contact</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Career</li>
            </ul>
          </div>

          <div  className="ml-9">
            <h3 className="text-lg font-semibold">SUPPORT</h3>
            <ul className="text-gray-400 mt-5 space-y-5">
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Help Center</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">FAQs</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Terms & Condition</li>
              <li className=" border border-transparent hover:border-b-orange-500 transition-all duration-200">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8 text-gray-400 text-sm">
          <p>
            © 2021 - Eduflex. Designed by{" "}
            <span className="text-orange-500">Templatecookie</span>. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="bg-gray-700 px-4 py-2  flex items-center gap-2 text-white font-medium border border-transparent hover:border-b-orange-500 transition-all duration-200">
              <AppleLogo size={20} /> App Store
            </button>
            <button className="bg-gray-700 px-4 py-2  flex items-center gap-2 text-white font-medium border border-transparent hover:border-b-orange-500 transition-all duration-200">
              <GooglePlayLogo size={20} /> Play Store
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  CaretDown,
  Bell,
  Heart,
  ShoppingCart,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import Logo from "/src/assets/LOGO.svg"; 
import Avatar from "/src/assets/Avatar.svg"; 

export default function NavbarOut() {
  const location = useLocation();
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");

  return (
    <div>
      <div className="bg-[#1D2026] flex justify-between items-center px-6 py-3">
        <ul className="text-white flex text-sm">
          {[
            { path: "/", label: "Home" },
            { path: "/courses", label: "Courses" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
            { path: "/instructor", label: "Become an Instructor" },
          ].map(({ path, label }) => (
            <li key={path} className="px-6">
              <Link
                to={path}
                className={
                  location.pathname === path
                    ? "text-white pb-1"
                    : "text-gray-400 hover:text-white hover:border-t-2 hover:border-orange-500 pb-1 pt-2 transition-all duration-100"
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 text-white text-sm relative">
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-orange-500 transition-all duration-200"
              onClick={() => {
                setCurrencyOpen(!currencyOpen);
                setLanguageOpen(false);
              }}
            >
              {currency} <CaretDown size={16} />
            </button>
            {currencyOpen && (
              <ul className="absolute right-0 mt-3 bg-[#1D2026] text-white shadow-lg w-24">
                {["USD", "EUR", "BRL"].map((cur) => (
                  <li
                    key={cur}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setCurrency(cur);
                      setCurrencyOpen(false);
                    }}
                  >
                    {cur}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-orange-500 transition-all duration-200"
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setCurrencyOpen(false);
              }}
            >
              {language} <CaretDown size={16} />
            </button>
            {languageOpen && (
              <ul className="absolute right-0 mt-3 bg-[#1D2026] text-white shadow-lg w-24">
                {["English", "Español", "Português"].map((lang) => (
                  <li
                    key={lang}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setLanguage(lang);
                      setLanguageOpen(false);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-between items-center px-6 py-3 border border-b-gray-200 pb-5">
        <img src={Logo} alt="Logo" className="h-10" />

        <div className="flex items-center gap-4 mr-64">
          <select className="border px-7 py-2 bg-white text-gray-700">
            <option>Browse</option>
          </select>
          <div className="flex items-center border px-3 py-2 bg-white text-gray-700 w-80">
            <MagnifyingGlass size={20} className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="What do you want to learn..."
              className="outline-none flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-700">
          <Bell size={24} className="cursor-pointer hover:text-orange-500 transition-all duration-200" />
          <Heart size={24} className="cursor-pointer hover:text-orange-500 transition-all duration-200" />
          <ShoppingCart size={24} className="cursor-pointer hover:text-orange-500 transition-all duration-200" />
          <Link to="/profile">
            <img src={Avatar} alt="Avatar" className="h-10 border-2 rounded-full hover:border-orange-500 transition-all duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

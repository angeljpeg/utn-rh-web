import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { BenefitsItems } from "../../../data/Benefits/Navigation/BenefitsItems";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-50/50 border-t shadow-md w-full flex flex-col z-30">
      <div className="flex md:hidden justify-between items-center px-4 py-3">
        <h1 className="text-[#228B22] font-bold">Menú</h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#228B22] hover:text-[#155a15] focus:outline-none"
        >
          {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      {/* Lista de navegación */}
      <div
        className={`overflow-hidden transition-all duration-700 ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        } md:max-h-none md:flex md:justify-center md:space-x-8`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
          {BenefitsItems.map((item) => (
            <li
              key={item.URL}
              className="text-[#228B22] hover:text-[#155a15] cursor-pointer font-semibold hover:scale-110"
            >
              <Link to={item.URL}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

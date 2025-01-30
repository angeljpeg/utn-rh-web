import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { PiUserCircle } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import utnLogo from "../assets/utn.svg";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  alert?: boolean;
  to?: string;
  active?: boolean;
}

interface SideBarContextProps {
  expanded: boolean;
}

const SideBarContext = createContext<SideBarContextProps>({ expanded: true });

export function SideBar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      className={`h-screen transition-all duration-300 ${
        expanded ? "w-64" : "w-16"
      }`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center mb-24">
          <img
            src={utnLogo}
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "w-24" : "w-0"
            }`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
        </div>

        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SideBarContext.Provider>

        <div className="border-t flex p-3 relative" ref={menuRef}>
          <div
            className="flex items-center justify-center bg-green-500 text-white font-bold rounded-md w-10 h-10 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {getInitials("Carlos Ivan")}
          </div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
              expanded ? "w-52 ml-3" : "w-0 opacity-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Carlos Ivan</h4>
              <span className="text-xs text-gray-600">lopezh@gmail.com</span>
            </div>
            <button onClick={() => setMenuOpen((prev) => !prev)}>
              <PiDotsThreeOutlineVerticalFill size={20} />
            </button>
          </div>
          {menuOpen && (
            <div
              className={`absolute p-2 bottom-2 mt-2 bg-white border rounded-lg shadow-lg ${
                expanded ? "left-64" : "left-16"
              }`}
              style={{ minWidth: "12rem" }}
            >
              <SidebarItem
                icon={<PiUserCircle size={20} />}
                to="/config"
                text="Mi cuenta"
              />
              <SidebarItem
                icon={<CiLogout size={20} />}
                to="/"
                text="Cerrar sesión"
              />
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, alert, to }: SidebarItemProps) {
  const { expanded } = useContext(SideBarContext);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          isActive
            ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800"
            : "hover:bg-green-50 text-gray-600"
        }`
      }
    >
      {icon}
      <span
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "w-52 ml-3" : "w-0 opacity-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {!expanded && (
        <div
          className="absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-green-800 text-sm
            invisible opacity-0 translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
        >
          {text}
        </div>
      )}
    </NavLink>
  );
}

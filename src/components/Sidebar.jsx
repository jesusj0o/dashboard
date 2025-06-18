import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard, MdStarBorder, MdSettings } from "react-icons/md";
import { HiOutlineFolder } from "react-icons/hi";
import { sideBarItems } from "../constants";


export const Sidebar = () => {
  return (
    <aside className="w-[260px] h-full bg-[#646C79] text-white p-6 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="mb-6 font-bold text-xl ml-10">
          <p>Gig share</p>
        </div>

        {/* Navegación */}
        <nav className="ml-10 flex flex-col gap-4 text-sm">
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <MdDashboard /> Dashboard
          </a>

          {/* Folders */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-white font-semibold">
              <HiOutlineFolder /> Folders
            </div>
            <ul className="ml-6 flex flex-col gap-2 font-light">
              {sideBarItems.map(links => (
                <li className="hover:text-gray-200 cursor-pointer">{links.label}</li>
              ))}
            
            </ul>
          </div>

          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <MdStarBorder /> Favorites
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <MdSettings /> Settings
          </a>
        </nav>
      </div>
    </aside>
  );
};

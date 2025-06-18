import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-[260px] h-full bg-[#646C79] text-white p-6 flex flex-col">
      <div className="mb-1 font-bold text-xl">
        <div className="ml-10">
          <p className="font-bold">Dashboard</p>
          {/* <img src="" alt="Dashboard" /> */}
        </div>

      </div>
      <div className="mb-8 ml-10">
        <p className="flex items-center gap-2">
          <span>Jesus Jo</span>
        </p>
      </div>

      <button className="mt-auto bg-white text-[#1f2937] rounded-xl py-2 font-bold text-sm mt-6">
        +Add
      </button>
    </aside>
  );
};

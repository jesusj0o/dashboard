import { Navbar, Sidebar, Header } from "./components";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-300 flex relative">
      <div className="z-0">
        <Sidebar />
      </div>

      <div className="flex-1 bg-[#f6f8fa] p-8 overflow-y-auto rounded-l-3xl shadow-2xl -ml-6 z-10">
        <Header />
{/* 
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-green-200 p-6 rounded-2xl shadow hover:scale-105 transition cursor-pointer">
            <h3 className="font-semibold text-lg">Marketing</h3>
            <p className="text-sm mt-1">124 MB</p>
          </div>
          <div className="bg-indigo-300 p-6 rounded-2xl shadow hover:scale-105 transition cursor-pointer">
            <h3 className="font-semibold text-lg">Branding</h3>
            <p className="text-sm mt-1">124 MB</p>
          </div>
          <div className="bg-slate-500 text-white p-6 rounded-2xl shadow hover:scale-105 transition cursor-pointer">
            <h3 className="font-semibold text-lg">Your Gallery</h3>
            <p className="text-sm mt-1">315 MB</p>
          </div>
          <div className="border-2 border-dashed border-gray-400 p-6 rounded-2xl flex items-center justify-center cursor-pointer hover:border-gray-600 transition">
            <span className="text-3xl text-gray-500">+</span>
          </div>
        </div> */}

      
      </div>
    </div>
  );
};

export default App;

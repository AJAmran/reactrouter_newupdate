import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Navbar />
      <main className="flex-1 w-full mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

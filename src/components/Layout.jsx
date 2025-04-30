

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="ml-64 p-6 w-full bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

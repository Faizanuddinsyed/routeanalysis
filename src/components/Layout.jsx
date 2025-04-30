// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";

// const Layout = () => {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="ml-64 p-6 w-full bg-gray-100">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 md:ml-64 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

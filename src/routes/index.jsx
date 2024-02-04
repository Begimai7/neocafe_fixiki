import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import CreateNewEmpleyee from "../components/admin/CreateNewEmpleyee";

export const router = createBrowserRouter([
        {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "menu",
          element:  <CreateNewEmpleyee/>
        },
        
      ],
    },
  ]);
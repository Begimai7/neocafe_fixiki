import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import EditModal from "../components/admin/EditModal";

export const router = createBrowserRouter([
        {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "menu",
          element:  <EditModal/>
        },
        
      ],
    },
  ]);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Groups from "./pages/Groups.jsx";
import Students from "./pages/Students.jsx";
import "./scss/App.scss";
import Courses_12 from "./pages/Courses_12.jsx";
import Announcement from "./pages/Announcement/Announcement.jsx";
import Punishment from "./pages/Punishment/Punishment.jsx";
import Gratz from "./pages/Gratz/Gratz.jsx";
import Info from "./pages/Info.jsx";
import RedList from "./pages/RedList/RedList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Courses_12 />,
  },
  {
    path: "/stud",
    element: <Students />,
  },
  {
    path: "/groups",
    element: <Groups />,
  },
  {
    path: "/anno",
    element: <Announcement />,
  },
  {
    path: "/redlist",
    element: <RedList />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  // {
  // 	path: "/gratz",
  // 	element: <Gratz />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Students from "./pages/Students.jsx";
import Groups from "./pages/Groups.jsx";
import "./App.css";
import Courses_12 from "./pages/Courses_12.jsx";
import Courses_34 from "./pages/Courses_34.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Students />,
	},
	{
		path: "/groups",
		element: <Groups />,
	},
	{
		path: "/12",
		element: <Courses_12 />,
	},
	{
		path: "/34",
		element: <Courses_34 />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

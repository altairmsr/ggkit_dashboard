import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Students from "./pages/Students.jsx";
import Groups from "./pages/Groups.jsx";
import "./scss/App.scss";
import Courses_12 from "./pages/Courses_12.jsx";
import Announcement from "./pages/Announcement/Announcement.jsx";
import Punishment from "./pages/Punishment/Punishment.jsx";
import Olimp from "./pages/Olimp/Olimp.jsx";
import Gratz from "./pages/Gratz/Gratz.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Courses_12 />,
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
		path: "/punish",
		element: <Punishment />,
	},
	{
		path: "/olimp",
		element: <Olimp />,
	},
	{
		path: "/gratz",
		element: <Gratz />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

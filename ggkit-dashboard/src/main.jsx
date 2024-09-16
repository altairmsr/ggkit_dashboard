import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Students from "./pages/Students.jsx";
import Groups from "./pages/Groups.jsx";
import "./App.css";

const router = createBrowserRouter([
	createRoutesFromElements(
	<Route path="/" element={<Students />} />
      	<Route path="groups" element={<Groups />} />
	
  )
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

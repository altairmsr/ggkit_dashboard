import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import "./scss/App.scss";

// Ленивая загрузка компонентов для оптимизации
const Groups = lazy(() => import("./pages/Groups.jsx"));
const Students = lazy(() => import("./pages/Students.jsx"));
const Courses_12 = lazy(() => import("./pages/Courses_12.jsx"));
const Announcement = lazy(() =>
  import("./pages/Announcement/Announcement.jsx")
);
const Punishment = lazy(() => import("./pages/Punishment/Punishment.jsx"));
const Gratz = lazy(() => import("./pages/Gratz/Gratz.jsx"));
const Info = lazy(() => import("./pages/Info.jsx"));
const RedList = lazy(() => import("./pages/RedList/RedList.jsx"));
const Punishment2 = lazy(() => import("./pages/Punishment2/Punishment2.jsx"));

// Компонент загрузки
const LoadingSpinner = () => (
  <div className="page">
    <div className="top-panel">
      <div className="header">
        <h1>Загрузка...</h1>
      </div>
    </div>
  </div>
);

// Конфигурация маршрутов
const routes = [
  { path: "/", element: <Courses_12 /> },
  { path: "/stud", element: <Students /> },
  { path: "/groups", element: <Groups /> },
  { path: "/punish", element: <Announcement /> },
  { path: "/redlist", element: <RedList /> },
  { path: "/info", element: <Info /> },
  { path: "/abl1", element: <Punishment /> },
  { path: "/abl2", element: <Punishment2 /> },
];

const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: (
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>{route.element}</Suspense>
      </ErrorBoundary>
    ),
  }))
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import TimelinePage from "./pages/TimelinePage.jsx";
import StatsPage from "./pages/StatsPage.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/timeline",
        Component: TimelinePage,
      },
      {
        path: "/stats",
        Component: StatsPage,
      },
    ],
    ErrorBoundary: NotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);

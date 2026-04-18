import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import TimelinePage from "../pages/TimelinePage";
import StatsPage from "../pages/StatsPage";
import FriendDetailPage from "../pages/FriendDetailPage";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
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
      {
        path: "/friend/:id",
        Component: FriendDetailPage,
      },
    ],
    errorElement: <NotFound />,
  },
]);

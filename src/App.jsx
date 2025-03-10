import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Guest from "./page/Guest.jsx";
import Layout from "./component/Layout";
import "./App.css";
import Map from "./page/Map.jsx";
import Home from "./page/Home.jsx";
import OurStory from "./page/OurStory.jsx";
import Gallery from "./page/Gallery.jsx";
import Dashboard from "./page/Dashboard.jsx";
import Timeline from "./page/Timeline.jsx";
import GalleryLayout from "./component/GalleryLayout.jsx";
import GalleryDetail from "./page/GalleryDetail.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: <Guest />,
          index: true,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "location",
          element: <Map />,
        },
        {
          path: "our-story",
          element: <OurStory />,
        },
        {
          path: "our-story",
          element: <OurStory />,
        },
        {
          path: "gallery",
          element: <GalleryLayout />,
          children: [
           
            {
              path: ":id",
              element: <GalleryDetail />,
            },
          ],
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "timeline",
          element: <Timeline />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

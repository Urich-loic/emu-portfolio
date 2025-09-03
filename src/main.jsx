import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/custom.css";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { path } from "framer-motion/client";
import { Home } from "lucide-react";
import BlogPage from "./pages/BlogPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import SideProject from "./pages/SideProject.jsx";
import CarrierProject from "./pages/CarrierProject.jsx";
import Blog from "./components/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <div>Page not found</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
        children: [
          {
            path: "/projects/side-project",
            element: <SideProject />,
          },
          {
            index: true,
            element: <CarrierProject />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
        children: [
          {
            path: "blogs/:blog",
            element: <Blog />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

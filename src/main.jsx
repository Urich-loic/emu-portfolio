import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './assets/custom.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { path } from "framer-motion/client";
import { Home } from "lucide-react";
import BlogPage from "./pages/BlogPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

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
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

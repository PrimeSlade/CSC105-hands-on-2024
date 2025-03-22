import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SingUpPage from "./pages/SingUpPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import FavouriteDetailPage from "./pages/FavouriteDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/fav",
        element: <FavouritesPage />,
      },
      { path: "/fav/:favId", element: <FavouriteDetailPage /> },
    ],
  },
  { path: "/signup", element: <SingUpPage /> },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

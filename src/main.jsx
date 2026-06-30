import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Navigate } from "react-router";
import App from "./routes/App.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import Homepage from "./pages/Homepage.jsx";
import Shoppage from "./pages/Shoppage.jsx";
import ShopBody from "./components/shoppage/ShopBody.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <Shoppage />,
        children: [
          {
            index: true,
            element: <Navigate to={"1"} />,
          },
          {
            path: ":pageNumber",
            element: <ShopBody />,
          },
        ],
      },
      {
        path: "item/:itemID",
        element: <ItemPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

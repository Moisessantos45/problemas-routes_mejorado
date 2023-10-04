import {
    Route,
    BrowserRouter,
    Routes,
    createBrowserRouter,
  } from "react-router-dom";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <NabvarInicio />,
      children: [
        {
          index: true,
          element: <Cards />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <NavbarDashboard />,
      children: [
        {
          index: true,
          element: <paginaprinciapl />,
        },
      ],
    },
  ]);
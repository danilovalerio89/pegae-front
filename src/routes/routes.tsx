import { BaseLayout } from "@/layout/BaseLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        path: "/company",
        lazy: () => import("@/pages/company"),
      },
      {
        path: "/user",
        lazy: () => import("@/pages/user"),
      },
      {
        path: process.env.NODE_ENV === "development" ? "/dev" : "",
        lazy: () => import("@/pages/_dev"),
      },
    ],
  },

  { path: "*", lazy: () => import("@/pages/not-found") },
]);

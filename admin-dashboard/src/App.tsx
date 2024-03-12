import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/customers",
        element: <Customers />,
      },
      {
        path: "/admin/transactions",
        element: <Transactions />,
      },
      // Charts
      
      // Apps
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;

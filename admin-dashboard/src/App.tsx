import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import(("./pages/Dashboard")));
const Products = lazy(() => import(("./pages/Products")));
const Customers = lazy(() => import(("./pages/Customers")));
const Transactions = lazy(() => import(("./pages/Transactions")));

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <Products />
      },
      {
        path: "/admin/customers",
        element: <Customers />,
      },
      {
        path: "/admin/transactions",
        element: <Transactions />
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

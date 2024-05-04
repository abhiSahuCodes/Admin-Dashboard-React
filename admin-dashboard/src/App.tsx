import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));
const NewProduct = lazy(() => import ("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import ("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import ("./pages/management/TransactionManagement"));
const BarCharts = lazy(() => import ("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import ("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import ("./pages/charts/LineCharts"));

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
      {
        path: "/admin/chart/bar",
        element: <BarCharts />
      },
      {
        path: "/admin/chart/pie",
        element: <PieCharts />
      },
      {
        path: "/admin/chart/line",
        element: <LineCharts />
      },

      // Apps

      // Management
      {
        path: "/admin/product/new",
        element: <NewProduct />
      },
      {
        path: "/admin/product/:id",
        element: <ProductManagement />
      },
      {
        path: "/admin/transaction/:id",
        element: <TransactionManagement />
      },
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

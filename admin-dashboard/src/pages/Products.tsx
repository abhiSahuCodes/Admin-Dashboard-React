import { ReactElement, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";

interface DataType{
  photo: string;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
]

const arr: DataType[] = [];

const Products = () => {

  const [data] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns, data, "dashboard-product-box", "Products"
  )
  return (
<div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  )
}

export default Products;

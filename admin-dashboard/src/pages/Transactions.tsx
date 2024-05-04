import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";



interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: React.ReactElement;
  action: React.ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Roshan",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>, 
  },
  {
    user: "John",
    amount: 7000,
    discount: 400,
    quantity: 8,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>, 
  },
  {
    user: "Nothan",
    amount: 8000,
    discount: 400,
    quantity: 9,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>, 
  }
];

const Transactions = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main content */}
      <main>{Table()}</main>
    </div>
  );
};

export default Transactions;

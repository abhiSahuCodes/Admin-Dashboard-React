import AdminSidebar from "../../components/AdminSidebar";

const PieCharts = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />
      <main className="chart-container"></main>
    </div>
  );
};

export default PieCharts;

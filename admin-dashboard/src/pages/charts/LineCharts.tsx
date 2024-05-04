import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";
import {months} from "./BarCharts";

const LineCharts = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />
      <main className="chart-container">
      <h1>Line Charts</h1>
        <section>
          <LineChart data={[220, 444, 343, 556, 778, 455, 990, 1444, 256, 143, 1000, 1100]} bgColor="rgba(53, 162, 255, 0.5)" label="Users" borderColor="rgb(53, 162, 255)" labels={months} />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
      </main>
    </div>
  )
}

export default LineCharts;

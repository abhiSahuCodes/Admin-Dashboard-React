import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";

const Dashboard = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main content */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input
            type="text"
            placeholder="Search for data, users, docs"
            name=""
            id=""
          />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <section className="widget-container">
          <WidgetItem
            percent={40}
            heading="Revenue"
            value={400000000}
            amount={true}
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={40}
            heading="Revenue"
            value={40000}
            amount={true}
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={40}
            heading="Revenue"
            value={4000}
            amount={true}
            color="rgb(0, 115, 255)"
          />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((element) => (
                <CategoryItem
                  key={element.heading}
                  color={`hsl(${Math.random() * 360}, ${element.value}%, 50%)`}
                  value={element.value}
                  heading={element.heading}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{""}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{""}
        </span>
      )}
    </div>
    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(${color} ${
          Math.abs(percent / 100) * 360
        }deg, rgb(255, 255, 255) 0)`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);
export default Dashboard;

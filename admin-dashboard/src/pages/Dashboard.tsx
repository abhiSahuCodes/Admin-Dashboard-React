import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
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
        <section className="widgetcontainer">
          <WidgetItem percent={40} heading="Revenue" value={400000000} amount={true}  color="rgb(0, 115, 255)"/>
          <WidgetItem percent={40} heading="Revenue" value={40000} amount={true}  color="rgb(0, 115, 255)"/>
          <WidgetItem percent={40} heading="Revenue" value={4000} amount={true}  color="rgb(0, 115, 255)"/>
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
}: WidgetItemProps) => <article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount? `$${value}` : value}</h4>
    {
      percent > 0 ? <span className="green"><HiTrendingUp /> +{percent}%{""}</span> : <span className="red"><HiTrendingDown /> {percent}%{""}</span>
    }
  </div>
  <div className="widgetCircle" style={{background: `conic-gradient(${color} ${(Math.abs(percent / 100) * 360)}deg, rgb(255, 255, 255) 0)`}}>
    <span style={{color}}>{percent}%</span>
  </div>
</article>;

export default Dashboard;

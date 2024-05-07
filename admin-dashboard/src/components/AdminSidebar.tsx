import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();


  return (
    <aside>
      <h2>LogoName</h2>
      <DivFirst location={location} />
      <DivSecond location={location} />
      <DivThird location={location} />
    </aside>
  );
};

const DivFirst = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Dashboard</h5>
      <ul>
        <List
          url="/admin/dashboard"
          text="Dashboard"
          Icon={RiDashboardFill}
          location={location}
        />
        <List
          url="/admin/products"
          text="Products"
          Icon={RiShoppingBag3Fill}
          location={location}
        />
        <List
          url="/admin/customers"
          text="Customers"
          Icon={IoIosPeople}
          location={location}
        />
        <List
          url="/admin/transactions"
          text="Transactions"
          Icon={AiFillFileText}
          location={location}
        />
      </ul>
    </div>
  );
};

const DivSecond = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Charts</h5>
      <ul>
        <List
          url="/admin/chart/bar"
          text="Bar"
          Icon={FaChartBar}
          location={location}
        />
        <List
          url="/admin/chart/pie"
          text="Pie"
          Icon={FaChartPie}
          location={location}
        />
        <List
          url="/admin/chart/line"
          text="Line"
          Icon={FaChartLine}
          location={location}
        />
      </ul>
    </div>
  );
};

const DivThird = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Apps</h5>
      <ul>
        <List
          url="/admin/app/stopwatch"
          text="Stopwatch"
          Icon={FaStopwatch}
          location={location}
        />
        <List
          url="/admin/app/coupon"
          text="Coupon"
          Icon={RiCoupon3Fill}
          location={location}
        />
        <List
          url="/admin/app/toss"
          text="Toss"
          Icon={FaGamepad}
          location={location}
        />
      </ul>
    </div>
  );
};

interface ListProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const List = ({ url, text, location, Icon }: ListProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url) ? "lightblue" : "none",
      }}
    >
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url) ? "rgb(0, 115, 255)" : "none",
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
};

export default AdminSidebar;

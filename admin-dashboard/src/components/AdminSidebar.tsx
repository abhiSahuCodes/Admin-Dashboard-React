import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100 
  );

  const resizeHandler = () => {

      setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  })

  return (
    <>
      {phoneActive && !showModal && (
        <button type="button" id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenu />
        </button>
      )}

      <aside style={phoneActive ? {width: '20rem', height: '100vh', position: 'fixed', top: 0, left: showModal ? "0" : "-20rem", transition: 'all 0.5s'} : {}}>
        <h2>LogoName</h2>
        <DivFirst location={location} />
        <DivSecond location={location} />
        <DivThird location={location} phoneActive={phoneActive} setShowModal={setShowModal} />
      </aside>
    </>
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

const DivThird = ({ location, phoneActive, setShowModal }: { location: Location, phoneActive: boolean, setShowModal: Dispatch<SetStateAction<boolean>> }) => {
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
      {phoneActive && (
        <button
          type="button"
          id="close-sidebar"
          onClick={() => setShowModal(false)}
        >Close</button>
      )}
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

import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../styles/types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Boots",
    photo: img,
    price: 2000,
    quantity: 4,
    _id: "asdsasds",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Abhishek Sahu",
    address: "BTM Layout",
    city: "Banglore",
    country: "India",
    state: "Karnataka",
    pinCode: 560068,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems: orderItems,
    _id: "asdasdasd",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
    _id,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => {
      return {
        ...prev,
        status: prev.status === "Processing" ? "Shipped" : "Delivered",
      };
    });
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section style={{padding: '2rem'}}>
          <h2>Order Items</h2>
          {order.orderItems.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} - ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: Rs. {subtotal}</p>
          <p>Shipping Charges: Rs. {shippingCharges}</p>
          <p>Tax: Rs. {tax}</p>
          <p>Discount: Rs. {discount}</p>
          <p>Total: Rs. {total}</p>

          <h5>Status Info</h5>
          <p>
            Status: {""}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button type="button" onClick={updateHandler}>
            Process Status
          </button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt="Product" />
    <Link to={`/admin/product/${_id}`}>{name}</Link>{" "}
    <span>
      Rs. {price} x {quantity} = Rs. {price * quantity}
    </span>
  </div>
);

export default TransactionManagement;

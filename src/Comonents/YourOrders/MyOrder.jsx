import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";

function MyOrder() {
  const { cardItems, food_list, getTotalCartAmount, paymentDone } = useContext(StoreContext);
  const [storedOrder, setStoredOrder] = useState(null);

  useEffect(() => {
    if (food_list) {
      const storedOrderData = JSON.parse(localStorage.getItem("myOrder"));
      setStoredOrder(storedOrderData);
    }
  }, [food_list]);

  const cartTotal = getTotalCartAmount();
  const isButtonDisabled = cartTotal <= 0;

  if (!paymentDone || !storedOrder || !storedOrder.food_list) {
    return (
      <h3 style={{textAlign:"center",marginTop:"12%"}}>You Do not have any orders yet!</h3>
    );
  }

  return (
    <div className="cart">
      <h3 style={{textAlign:"center",marginBottom:"5%"}}>My Orders</h3>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Delivery Status</p> {/* Added delivery status */}
        </div>
        <br />
        <hr />
        {storedOrder.food_list.map((item, index) => {
          if (storedOrder.cardItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{storedOrder.cardItems[item._id]}</p>
                  <p>${item.price * storedOrder.cardItems[item._id]}</p>
                  <p>pending</p> {/* Render delivery status */}
                  {/* <p className="cross" onClick={() => removeFromCart(item._id)}>X</p> */}
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total </h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${cartTotal}</p>
            </div><hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${cartTotal === 0 ? 0 : 2}</p>
            </div><hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${cartTotal === 0 ? 0 : cartTotal + 2}</p>
            </div>
          </div>
          {/* <button onClick={() => { if (!isButtonDisabled) navigate("/order") }} disabled={isButtonDisabled}>Proceed to Checkout</button> */}
        </div>
      </div>
    </div>
  );
}

export default MyOrder;

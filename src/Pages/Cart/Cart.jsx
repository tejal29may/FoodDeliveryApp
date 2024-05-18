


import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router";

function Cart() {
  const { cardItems, food_list, removeFromCart, getTotalCartAmount ,cartItemsList,setCartItemsList} = useContext(StoreContext);
  const navigate = useNavigate();

  const cartTotal = getTotalCartAmount();
  const isButtonDisabled = cartTotal <= 0;

  const handleRemoveFromCart = (itemId) => {
    
    removeFromCart(itemId);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index, array) => {
          if (cardItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>${item.price * cardItems[item._id]}</p>
                  <p className="cross" onClick={() => handleRemoveFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null; // Make sure to return null for items with 0 quantity
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
          <button onClick={() => { if (!isButtonDisabled) navigate("/order") }} disabled={isButtonDisabled}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;






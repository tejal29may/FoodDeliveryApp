

import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

function FoodItem({ id, name, price, desciption, image }) {
  const { cardItems, addTocart, removeFromCart, logindone } = useContext(StoreContext);

  return (
    <>
      <div className="foodItem">
        <div className="food-item-img-conatiner">
          <img src={image} alt="" className="food-item-img" />
          {logindone && ( 
            <img
              src={assets.add_icon_white}
              alt=""
              className="add"
              onClick={() => {
                addTocart(id);
              }}
            />
          )}
          {cardItems[id] && ( 
            <div className="food-item-counter">
              <img
                src={assets.remove_icon_red}
                alt=""
                onClick={() => {
                  removeFromCart(id);
                }}
              />
              <p>{cardItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt=""
                onClick={() => {
                  addTocart(id);
                }}
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description">{desciption}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </>
  );
}

export default FoodItem;

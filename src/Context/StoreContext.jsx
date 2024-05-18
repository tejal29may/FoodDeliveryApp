// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cardItems, setCardItems] = useState({});

//   const addTocart = (itemId) => {
//     if (!cardItems[itemId]) {
//       setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cardItems) {
//       if (cardItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         totalAmount += itemInfo.price * cardItems[item];
//       }
//     }
//     return totalAmount;
//   };

// const[logindone,setLoginDone]=useState(false);
// const[paymentDone,setPaymentDone]=useState(false)
//   const contextValue = {
//     food_list,
//     cardItems,
//     setCardItems,
//     addTocart,
//     removeFromCart,
//     getTotalCartAmount,
//     logindone,
//     setLoginDone,
//     paymentDone,
//     setPaymentDone
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;



import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});
  const [cartData, setCartData] = useState([]);
  const [logindone, setLoginDone] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [cartItemsList, setCartItemsList] = useState([]);

  const addTocart = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    updateCartData(itemId, true);
  };

  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    updateCartData(itemId, false);
  };

  const updateCartData = (itemId, isAdded) => {
    const existingItemIndex = cartData.findIndex((item) => item._id === itemId);
    if (existingItemIndex !== -1 && !isAdded) {
      if (cartData[existingItemIndex].quantity === 1) {
        setCartData((prev) => prev.filter((item) => item._id !== itemId));
      } else {
        setCartData((prev) =>
          prev.map((item) =>
            item._id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
    } else if (existingItemIndex !== -1 && isAdded) {
      setCartData((prev) =>
        prev.map((item) =>
          item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const newItem = food_list.find((item) => item._id === itemId);
      setCartData((prev) => [...prev, { ...newItem, quantity: 1 }]);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cardItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addTocart,
    removeFromCart,
    getTotalCartAmount,
    cartData,
    logindone,
    setLoginDone,
    paymentDone,
    setPaymentDone,
    cartItemsList,
    setCartItemsList
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

import NavBar from "./Comonents/Navbar/NavBar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Footer from "./Comonents/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./Comonents/LoginPopUp/LoginPopUp";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlceOrder/PlaceOrder";
import PaymentDone from "./Comonents/OrderDone/PaymentDone";
import MyOrder from "./Comonents/YourOrders/MyOrder";
function App() {

  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {
      showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>
    }
      <div className="app">
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<PlaceOrder/>}/>
          <Route path="/paymentdone" element={<PaymentDone/>}/>
           <Route path="/myorder" element={<MyOrder/>}/>
        </Routes>
      
      </div>
      <Footer />
    </>
  );
}

export default App;

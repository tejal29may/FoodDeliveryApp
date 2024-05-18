import React, { useContext, useState } from "react";
import "./PaymentDone.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router";
import { food_list } from "../../assets/assets";

function PaymentDone({ onPaymentSubmit, amount }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false); // State for controlling loading state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for controlling popup visibility
  const { getTotalCartAmount,paymentDone,setPaymentDone } = useContext(StoreContext);
const navigate=useNavigate()


  const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting payment
    setTimeout(() => {
      setLoading(false); // Set loading state to false after 5 seconds
      setShowSuccessPopup(true); // Show the success popup after 5 seconds
      setTimeout(() => {
        setShowSuccessPopup(false); 
        navigate("/myorder")
      }, 3000);
    
    }, 5000); 
    // 5000 milliseconds = 5 seconds
  };

  return (
    <div className="payment-form-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h2>Payment Details</h2>
        <div className="form-group">
          <label>Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="googlepay">Google Pay</option>
          </select>
        </div>
        {paymentMethod === "card" && (
          <>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
          </>
        )}
        <div className="form-group">
          <label>Amount</label>
          <input
            type="text"
            value={getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
            readOnly
          />
        </div>
        <button type="submit" disabled={loading} onClick={()=>{
          setPaymentDone(true)
          
        }}>
          {loading ? "Processing..." : "Submit Payment"}
        </button>
      </form>
      {showSuccessPopup && (
        <div className="success-popup">
          <p>Payment successful!</p>
        </div>
      )}
    </div>
  );
}

export default PaymentDone;

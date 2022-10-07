import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import reclame from "./images/reclame2.jpg";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img className="checkout__ad" src={reclame} alt="ad" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="ckeckout__title">Your Shopping Basket</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;

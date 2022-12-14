import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import reclame from "./images/reclame2.jpg";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
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
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            ></CheckoutProduct>
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>Subtotal</h1>
          <Subtotal></Subtotal>
        </div>
      )}
    </div>
  );
}
export default Checkout;

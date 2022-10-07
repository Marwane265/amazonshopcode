import React from "react";

function CheckoutProduct({ id, title, image, price, rating }) {
  const removeFromBasket = () => {};
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info"></div>
      <div className="checkoutProduct__title">{title}</div>

      <p className="checkoutProduct__price">
        <small>€</small>
        <strong>{price}</strong>
      </p>
      <div className="checkoutProduct__rating">
        {Array(rating)
          .fill()
          .map((_) => {
            return <p>⭐</p>;
          })}
      </div>
      <button onClick={removeFromBasket}>RemoveFromBasket</button>
    </div>
  );
}

export default CheckoutProduct;

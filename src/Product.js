import React from "react";
import "./Product.css";
import star from "./images/star.png";
import { useStateValue } from "./StateProvider";
function Product({ id, title, img, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: img,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info"></div>
      <p>{title}</p>
      <p className="product__price">
        <small>€</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <img src={star} />
          ))}
      </div>
      <img src={img} alt="star" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

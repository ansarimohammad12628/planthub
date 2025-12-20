import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removecart } from "../Features/userSlice";
import "../Css/Cart.css";
const Cart = () => {
  const cartData = useSelector((state) => state.users.item);
  console.log("Cart Data:", cartData);

  const dispatch = useDispatch();
  return (
    <section className="cart-page">
      <div className="plants-container plants-cart">
        {cartData &&
          cartData.map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.info}</p>
              <button
                className="addtocart"
                onClick={() => dispatch(removecart(plant.cartId))}
              >
                Remove to Cart
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Cart;

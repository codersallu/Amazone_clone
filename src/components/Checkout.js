import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import {ProductCard} from "./ProductCard";

const Checkout = () => {
  const [{basket} ]= useStateValue();

  return (
    
    <div className="checkout">
      <div className="checkout__left">
        
        {basket.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your shopping basket is empty</h2>
            <p>You have no items in your basket. Buy one</p>
          </div>
        ) : (
          <div>
            <h2 className="shopingbaskettitle">items in the basket</h2>
            {basket.map((item) => (
              <ProductCard
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

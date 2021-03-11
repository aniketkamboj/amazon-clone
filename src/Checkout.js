import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

import "./Checkout.css";
import SubTotal from "./SubTotal";
function Checkout() {
  const [{ basket , user},dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://hackernoon.com/hn-images/1*j41hMsYft-ifSvXuWOb7Gg.png"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket . To buy one or more items ,
              click on Add Items next to the item.{" "}
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello {user?.email}</h3>
            <h2 className="checkout__title">Your shopping basket </h2>
            {basket.map((item) => (
              <CheckoutProduct
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
      {basket.length>0 && (
        <div className="checkout__right">
          <SubTotal/>
        </div>
      )}
    </div>
  );
}

export default Checkout;

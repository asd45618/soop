import React from "react";
import Title from "@/components/layout/Title";
import CartSection from "@/components/cart/CartSection";
import { useLocation } from "react-router-dom";

const CartView = () => {
  const location = useLocation();
  const { product, qty } = location.state || {}; // qty 변수도 함께 해체합니다.
  return (
    <div>
      <Title title="CART" />
      <div className="row">
        <CartSection product={product} qty={qty} />
      </div>
    </div>
  );
};

export default CartView;

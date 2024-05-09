import React from "react";
import { useLocation } from "react-router-dom";
import Title from "@/components/layout/Title";
import ProductDetailSection from "@/components/product/ProductDetailSection";

const ProductDetailView = () => {
  const location = useLocation();
  const { item } = location.state || {};
  return (
    <div>
      <Title title="" />
      <div className="row">
        <ProductDetailSection product={item} />
      </div>
    </div>
  );
};

export default ProductDetailView;

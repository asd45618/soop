import React from 'react';
import { useLocation } from 'react-router-dom'
import Title from '@/components/layout/Title'
import ProductDetailSection from '@/components/product/ProductDetailSection'

const ProductDetailView = () => {
    const location = useLocation()
    const { item } = location.state
    return (
            <div className="row">
                <Title title="상품설명"/>
                <ProductDetailSection product={item} />
            </div>
    );
};

export default ProductDetailView;
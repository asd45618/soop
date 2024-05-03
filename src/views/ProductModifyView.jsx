import React from 'react';
import {useLocation} from 'react-router-dom'
import Title from '@/components/layout/Title'
import ProductModify from '@/components/product/ProductModify'

const ProductModifyView = () => {
    const location = useLocation()
    const { product } = location.state
    return (
        <div>
            <Title title="상품수정"/>
            <ProductModify item={product} />
        </div>
    );
};

export default ProductModifyView;
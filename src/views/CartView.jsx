import React from 'react';
import styled from 'styled-components'
import Title from '@/components/layout/Title'
import CartSection from '@/components/cart/CartSection'
import {useLocation} from 'react-router-dom'

const CartViewBlock = styled.div`
`

const CartView = () => {
    const location = useLocation()
    const { product, qty } = location.state || {}; // qty 변수도 함께 해체합니다.
    console.log(product, qty)
    return (
        <CartViewBlock>
            <Title title="CART"/>
            <div className="row">
            <CartSection product={product} qty={qty}/>
            </div>
        </CartViewBlock>
    );
};


export default CartView;
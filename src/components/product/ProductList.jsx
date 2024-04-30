import React from 'react';
import styled from 'styled-components'

const ProductListBlock = styled.div`
    flex: 0 0 23%;
    border: 0px solid #000;
    margin: 10px 1%;
    @media (max-width:768px){
        flex: 0 0 48%;
    }
    .imgbox {
        overflow: hidden;
        border: 1px solid #ddd;
        border-radius: 20px;
        margin-bottom: 10px;
        img { transition: all 0.5s; }
            &:hover {
                img { transform: scale(1.5); }
            }
      }
    .info { 
        margin-left: 10px;
        font-size: 15px;
        line-height: 23px;
        p:last-child {
            span { margin-right: 10px; }
        }
        p:nth-child(1) {
            // font-weight: 600;
        }
        p:nth-child(2) {
            font-size: 13px;
            color:#f00;
        }
        p:nth-child(3) {
            font-weight: 600;
        }
    }
`

const ProductList = ({item}) => {
    const { photo, name, comment, price, icon } = item
    
    
    return (
        <ProductListBlock>
            <div className="imgbox">
               <a href="#"><img src={photo} alt={name} /></a>
            </div>
            <div className="info">
                <div>
                    <p><a href="#">{ name }</a></p>
                    <p>{ comment }</p>
                    <p>{ price.toLocaleString() }</p>
                    <p>
                        { icon.map((item, index)=><span key={index}><img src={item} /></span>) }
                    </p>
                </div>
            </div>
        </ProductListBlock>
    );
};

export default ProductList;
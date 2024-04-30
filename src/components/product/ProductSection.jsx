import React from 'react';
import ProductList from './ProductList'
import styled from 'styled-components'

const ProductSectionBlock = styled.div`
    margin: 100px auto;
    ul { 
        display: flex;
        flex-wrap: wrap;
    }
`

const ProductSection = () => {

    const products = [
        {
          photo: './assets/image/g1.jpg',
          name: '공유 포토 노트',
          comment: '※ 1인당 5EA 구매 한정',
          price: 32000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg']
        },
        {
          photo: './assets/image/g2.jpg',
          name: '김재욱 아코디언 엽서',
          comment: '※ 1인당 2EA 구매 한정',
          price: 12000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif']
        },
        {
          photo: './assets/image/g3.jpg',
          name: '수지 OST 미니앨범',
          comment: '※ 1인당 1EA 구매 한정',
          price: 45000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg','./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif']
        },
        {
          photo: './assets/image/g4.jpg',
          name: '서현진 티셔츠',
          comment: '',
          price: 58000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg']
        },
        {
          photo: './assets/image/g3.jpg',
          name: '수지 OST 미니앨범',
          comment: '※ 1인당 1EA 구매 한정',
          price: 45000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg','./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif']
        },
        {
          photo: './assets/image/g4.jpg',
          name: '서현진 티셔츠',
          comment: '',
          price: 58000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg']
        },
        {
          photo: './assets/image/g1.jpg',
          name: '공유 포토 노트',
          comment: '※ 1인당 5EA 구매 한정',
          price: 32000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg']
        },
        {
          photo: './assets/image/g2.jpg',
          name: '김재욱 아코디언 엽서',
          comment: '※ 1인당 2EA 구매 한정',
          price: 12000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif']
        },
        {
          photo: './assets/image/g1.jpg',
          name: '공유 포토 노트',
          comment: '※ 1인당 5EA 구매 한정',
          price: 32000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg']
        },
        {
          photo: './assets/image/g2.jpg',
          name: '김재욱 아코디언 엽서',
          comment: '※ 1인당 2EA 구매 한정',
          price: 12000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif']
        },
        {
          photo: './assets/image/g3.jpg',
          name: '수지 OST 미니앨범',
          comment: '※ 1인당 1EA 구매 한정',
          price: 45000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg','./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif']
        },
        {
          photo: './assets/image/g4.jpg',
          name: '서현진 티셔츠',
          comment: '',
          price: 58000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg']
        },
        {
          photo: './assets/image/g3.jpg',
          name: '수지 OST 미니앨범',
          comment: '※ 1인당 1EA 구매 한정',
          price: 45000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg','./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif']
        },
        {
          photo: './assets/image/g4.jpg',
          name: '서현진 티셔츠',
          comment: '',
          price: 58000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg']
        },
        {
          photo: './assets/image/g1.jpg',
          name: '공유 포토 노트',
          comment: '※ 1인당 5EA 구매 한정',
          price: 32000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_.jpg']
        },
        {
          photo: './assets/image/g2.jpg',
          name: '김재욱 아코디언 엽서',
          comment: '※ 1인당 2EA 구매 한정',
          price: 12000,
          icon: ['./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif']
        },
        
      ]

    return (
        <ProductSectionBlock  className="row">
            <ul>
                { products.map((item, index)=><ProductList item={item} key={index} />) }
            </ul>
        </ProductSectionBlock>
    );
};

export default ProductSection;
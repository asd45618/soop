import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// import { useSelector } from 'react-redux'

const ProductDetailSectionBlock = styled.div`
margin: 50px;
  .content {
    display: flex;
    .photo {
      width: 600px;
      margin-right: 50px;
      border-radius: 20px;
    }
    .info {
      flex: 1;
      font-size: 18px;
      h2 {
        font-size: 30px;
        margin-bottom: 50px;
        font-weight: 600;
      }
      p:nth-child(2) {
        color: #f55;
        font-weight: 600;
        border-bottom: 1px solid #ddd;
      }
      p:nth-child(3) {
        font-size: 15px;
        border-bottom: 1px solid #ddd;
      }
      .btn {
        margin-left:-20px;
        margin-top: 50px;
        a { padding:10px 20px; background:#bbb; color:#fff; margin:20px 5px; 
          &:hover { background:#000; }
        }
      }
    }
  }
`

const ProductDetailSection = ({product}) => {

  //  const admin = useSelector(state=>state.members.admin)
   const [loging, setLoging] = useState(false)
   useEffect(()=>{
     setLoging()
   }, [])

    return (
        <ProductDetailSectionBlock className="row"> 
            <div className="content">
                <div className="photo">
                    <img src={product.photo} alt={product.name} />
                </div>
                <div className="info">
                    <h2>{ product.name }</h2>
                    <p>가격 : { parseInt(product.price).toLocaleString()}원</p>
                    <p>이 상품의 아이디는 { product.id }</p>
                    <p>상품설명 : <span dangerouslySetInnerHTML={{ __html: product.description }} /></p>
                    <div className="btn">
                      <Link to="#">구매하기</Link>
                      <Link to="/product">목록가기</Link>
                      { loging &&  <Link to="#">상품수정</Link> }
                    </div>
                </div>
            </div>
        </ProductDetailSectionBlock>
    );
};

export default ProductDetailSection;
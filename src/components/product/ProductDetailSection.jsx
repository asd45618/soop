import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
        margin-bottom: 30px;
        font-weight: 600;
        border-bottom: 1px solid #ddd;
      }
      p:nth-child(2) {
        font-weight: 600;
        // border-bottom: 1px solid #ddd;
      }
      p:nth-child(3) {
        color: #bbb;
        font-size: 15px;
        // border-bottom: 1px solid #ddd;
      }
      p:nth-child(4) {
        font-size: 15px;
        // border-bottom: 1px solid #ddd;
        input {
          width: 50px;
          text-align: center;
        }
      }
      p:nth-child(5) {
        font-size: 15px;
      }
      .btn {
        margin-left: -20px;
        margin-top: 50px;
        border: none;
        a {
          padding: 10px 20px;
          background: #bbb;
          color: #fff;
          margin: 20px 5px;
          &:hover {
            background: #000;
          }
        }
      }
    }
  }
`;

const ProductDetailSection = ({ product }) => {
  const admin = useSelector((state) => state.members.admin);
  const [qty, setQty] = useState(1);
  const [loging, setLoging] = useState(false);

  const handleChange = (e) => {
    let newQty = parseInt(e.target.value);
    if (newQty < 1) {
      newQty = 1;
    }
    if (newQty > product.inventory) {
      newQty = product.inventory;
    }
    setQty(newQty);
  };

  useEffect(() => {
    setLoging(admin);
  }, [admin]);

  return (
    <ProductDetailSectionBlock className="row">
      <div className="content">
        <div className="photo">
          <img src={product.photo} alt={product.name} />
        </div>
        <div className="info">
          <h2>
            {product.name}
          </h2>
          <p>가격 : {parseInt(product.price).toLocaleString()}원</p>
          <p>이 상품의 아이디는 {product.id}</p>
          <p>
            구매수량 :{" "}
            <input type="number" value={qty} onChange={handleChange} />
          </p>
          <p>
            상품설명 :{" "}
            <span dangerouslySetInnerHTML={{ __html: product.description }} />
          </p>

          <div className="btn">
            <Link to="/cart">바로구매</Link>
            <Link to="/product">목록가기</Link>
            {loging && (
              <Link to="/productModify" state={{ product }}>
                상품수정
              </Link>
            )}
          </div>
        </div>
      </div>
    </ProductDetailSectionBlock>
  );
};

export default ProductDetailSection;

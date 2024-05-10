import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartDB, productDB } from "../../assets/firebase";
import { fetchCarts, fetchProducts } from "../../store/product";

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
      }
      p:nth-child(3) {
        color: #bbb;
        font-size: 15px;
      }
      p:nth-child(4) {
        font-size: 15px;
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.members.user);
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

  const buyNow = () => {
    if (user) {
      if (confirm("바로 구매하시겠습니까?")) {
        productDB
          .child(product.key)
          .update({
            inventory: product.inventory - qty,
          })
          .then(() => {
            alert("구매가 완료되었습니다.");
            navigate("/product");
          });
        dispatch(fetchProducts());
      }
    } else {
      alert("로그인해주세요.");
    }
  };

  const addCart = async () => {
    if (user) {
      if (
        confirm(`장바구니에 ${product.name}상품을 ${qty}개 추가하시겠습니까?`)
      ) {
        try {
          const cartItemRef = cartDB.child(user.key).child(product.id); // 해당 유저의 레퍼런스 생성
          const cartItemSnapshot = await cartItemRef.once("value"); // 해당 유저의 스냅샷 가져오기
          let quantity = 1;
          if (cartItemSnapshot.exists()) {
            // 해당 유저가 이미 장바구니에 있는 경우 수량을 증가시킴
            quantity = cartItemSnapshot.val().qty + qty;
          } else {
            quantity = qty;
          }
          // 장바구니에 상품 추가 또는 업데이트
          await cartItemRef.set({ qty: quantity });
          dispatch(fetchCarts());
        } catch (error) {
          console.log("오류메시지:", error);
        }
      }
    } else {
      alert("로그인해주세요.");
    }
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
          <h2>{product.name}</h2>
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
            <a onClick={buyNow}>바로구매</a>
            <a onClick={addCart}>장바구니 추가</a>
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

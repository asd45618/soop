import React, { useState, useRef, useEffect } from "react";
import { fetchProducts } from "@/store/product";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { BsCartPlusFill, BsCartPlus } from "react-icons/bs";
import { PiSpinnerLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { cartDB } from "@/assets/firebase";
import { fetchCarts } from "../../store/product";

const ProductSectionBlock = styled.div``;

const UlBlock = styled.ul`
  border: 0px solid #000;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 50px 0;
`;
const ListBlock = styled.li`
  flex: 0 0 23%;
  border: 0px solid #000;
  margin: 10px 1%;
  @media (max-width: 768px) {
    flex: 0 0 48%;
  }
  .imgbox {
    overflow: hidden;
    border: 0px solid #ddd;
    border-radius: 20px;
    margin-bottom: 10px;
    height: 270px;
    img {
      transition: all 0.5s;
    }
    &:hover {
      img {
        transform: scale(1.5);
      }
    }
  }
  .info {
    margin-left: 10px;
    font-size: 17px;
    line-height: 13px;
    padding-bottom: 10px;
    p:nth-child(1) {
      margin-top: 20px;
      font-weight: 600;
    }
    p:nth-child(2) {
      font-size: 15px;
    }
  }
`;

const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  .loadIcon {
    font-size: 80px;
    animation: loadSpin 5s linear infinite;
  }
  @keyframes loadSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(3turn);
    }
  }
`;
const ProductInsert = styled.div`
  text-align: center;
  margin: 50px 0;
  a {
    padding: 10px 20px;
    background: #999;
    color: #fff;
    &:hover {
      background: #000;
    }
  }
`;

const ProductSection = () => {
  const dispatch = useDispatch();

  const admin = useSelector((state) => state.members.admin);

  const user = useSelector((state) => state.members.user);
  const carts = useSelector((state) => state.products.carts);
  const allData = useSelector((state) => state.products.products);
  const [products, setProducts] = useState(allData);

  const [loading, setLoading] = useState(false);

  const cartIdCount = (id) => {
    let item = carts.find((value) => value.id == id);
    if (item) {
      return item.qty;
    } else {
      return 0;
    }
  };

  const addToCart = async (id) => {
    if (user) {
      try {
        const cartItemRef = cartDB.child(user.key).child(id); // 해당 유저의 레퍼런스 생성
        const cartItemSnapshot = await cartItemRef.once("value"); // 해당 유저의 스냅샷 가져오기
        let quantity = 1;
        if (cartItemSnapshot.exists()) {
          // 해당 유저가 이미 장바구니에 있는 경우 수량을 증가시킴
          quantity = cartItemSnapshot.val().qty + 1;
        }
        // 장바구니에 상품 추가 또는 업데이트
        await cartItemRef.set({ qty: quantity });
        dispatch(fetchCarts());
      } catch (error) {
        console.log("오류메시지:", error);
      }
    } else {
      alert("로그인을 해주세요.");
      sessionStorage.setItem("previousUrl", "/product");
      navigate("/login");
    }
  };

  const [loging, setLoging] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (allData.length > 0) {
      setLoading(true);
      setProducts(allData);
    }
  }, [allData]);

  useEffect(() => {
    setLoging(admin);
  }, [admin]);

  if (!loading) {
    return (
      <ProductSectionBlock>
        <LoadingBlock>
          <PiSpinnerLight className="loadIcon" />
        </LoadingBlock>
        <ProductInsert>
          <Link to="/productInsert">상품등록</Link>
        </ProductInsert>
      </ProductSectionBlock>
    );
  }
  return (
    <ProductSectionBlock className="row">
      <UlBlock>
        {products.map((item, index) => (
          <ListBlock key={index}>
            <div className="imgbox">
              <Link to={`/product/${item.name}`} state={{ item: item }}>
                <img src={item.photo} alt={item.name} />
              </Link>
            </div>
            <div className="info">
              <div>
                <p>
                  <a href="#">{item.name}</a>
                </p>
                <p>{parseInt(item.price).toLocaleString()}원</p>
                {item.inventory != cartIdCount(item.id) ? (
                  <button onClick={() => addToCart(item.id)}>
                    <BsCartPlusFill />
                  </button>
                ) : (
                  <button>
                    <BsCartPlus />
                  </button>
                )}
                {item.inventory != cartIdCount(item.id) ? (
                  <span>
                    {item.inventory - cartIdCount(item.id)}개 남았습니다.
                  </span>
                ) : (
                  <span>품절!!</span>
                )}
              </div>
            </div>
          </ListBlock>
        ))}
      </UlBlock>

      {loging && (
        <ProductInsert>
          <Link to="/productInsert">상품등록</Link>
        </ProductInsert>
      )}
    </ProductSectionBlock>
  );
};

export default ProductSection;

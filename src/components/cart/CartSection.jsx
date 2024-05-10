import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/product";
import { cartDB } from "@/assets/firebase";
import { fetchCarts } from "../../store/product";
import { productDB } from "../../assets/firebase";
import { useNavigate } from "react-router-dom";

const TableBlock = styled.table`
  margin: 50px 0;
  col:nth-child(1) {
    width: 150px;
  }
  col:nth-child(2) {
    width: auto;
  }
  col:nth-child(3) {
    width: 150px;
  }
  col:nth-child(4) {
    width: 150px;
  }
  col:nth-child(5) {
    width: 150px;
  }
  th {
    background: #ddd;
    padding: 10px 30px;
  }
  td {
    padding: 10px 30px;
  }

  tbody {
    td:nth-child(3) {
      input {
        border: 1px solid #000;
        text-align: center;
        padding: 3px 0;
        width: 50px;
      }
    }
    td:nth-child(5) {
      button {
        padding: 5px 8px;
        border-radius: 3px;
        background: red;
        color: #fff;
      }
    }
  }
  tfoot {
    td {
      background: #eee;
      text-align: center;
      font-weight: 600;
      .buy {
        padding-top: 15px;
      }
    }
  }
`;

const CartSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const carts = useSelector((state) => state.products.carts);
  const user = useSelector((state) => state.members.user);
  const [tempProducts, setTempProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [allCount, setAllCount] = useState(0);

  // 각 제품에 대한 수량 상태를 관리하기 위한 상태
  const [quantityValues, setQuantityValues] = useState({});

  const onChange = (e, id, inventory) => {
    setQuantityValues((prevState) => ({
      ...prevState,
      [id]: newQty,
    }));
    let newQty = parseInt(e.target.value);
    if (newQty < 1) {
      newQty = 1;
    }
    if (newQty > inventory) {
      newQty = inventory;
    }
    if (user) {
      cartDB
        .child(user.key)
        .child(id)
        .update({ qty: newQty })
        .then(() => {
          dispatch(fetchProducts());
          dispatch(fetchCarts());
        })
        .catch((error) => {
          console.error("수량 업데이트 중 오류 발생:", error);
        });
    }
  };

  const removeCartItem = (id) => {
    if (user) {
      cartDB
        .child(user.key)
        .child(id)
        .remove()
        .then(() => {
          setTempProducts((prevTempProducts) =>
            prevTempProducts.filter((item) => item.product.id !== id)
          );
        })
        .catch((error) => {
          console.error("삭제 중 오류 발생:", error);
        });
      dispatch(fetchCarts());
    }
  };

  const buyProduct = () => {
    if (confirm("정말 구매하시겠습니까?")) {
      tempProducts.map((val) => {
        let newPro = products.find((item) => val.product.id === item.id);
        productDB.child(val.product.key).update({
          inventory: newPro.inventory - val.qty,
        });
        cartDB.child(user.key).child(val.product.id).remove();
      });
      dispatch(fetchCarts());
      dispatch(fetchProducts());
      alert("구매가 완료되었습니다.");
      navigate("/product");
    }
  };

  useEffect(() => {
    if (carts.length) {
      setTempProducts(() => {
        const newData = carts.map((item) => {
          const product = products.find((product) => product.id == item.key);
          return { product: product, qty: item.qty };
        });
        setTotal(
          newData.reduce(
            (acc, item) =>
              acc + parseInt(item.product.price) * parseInt(item.qty),
            0
          )
        );
        setAllCount(newData.reduce((acc, item) => acc + parseInt(item.qty), 0));
        return newData;
      });
    } else {
      setTempProducts([]);
    }
  }, [carts]);

  return (
    <TableBlock>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>이미지</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
          <th>기타</th>
        </tr>
      </thead>
      {tempProducts && tempProducts.length ? (
        <tbody>
          {tempProducts.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.product.photo} alt={item.product.name} />
              </td>
              <td>{item.product.name}</td>
              <td>
                <input
                  type="number"
                  value={quantityValues[item.product.id] || item.qty}
                  onChange={(e) =>
                    onChange(e, item.product.id, item.product.inventory)
                  }
                />
              </td>
              <td>
                {(
                  parseInt(item.product.price) * parseInt(item.qty)
                ).toLocaleString()}{" "}
                원
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeCartItem(item.product.id)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td
              colSpan="5"
              style={{
                padding: "100px 0",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              장바구니가 비어 있습니다.
            </td>
          </tr>
        </tbody>
      )}
      <tfoot>
        <tr>
          <td colSpan="5">
            합계 : {total.toLocaleString()} <br />
            주문상품수량 : {tempProducts.length}종 {allCount}개
            {user ? (
              <div className="buy">
                <button onClick={buyProduct}>구매하기</button>
              </div>
            ) : (
              ""
            )}
          </td>
        </tr>
      </tfoot>
    </TableBlock>
  );
};

export default CartSection;

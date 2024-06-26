import React, { useState } from "react";
import styled from "styled-components";
import { productDB, oStorage } from "@/assets/firebase";
import { useNavigate } from "react-router-dom";

const ProductModifyBlock = styled.div`
  max-width: 500px;
  margin: 50px auto;
  div {
    display: flex;
    padding: 5px;
    margin: 5px;
    label {
      width: 100px;
      display: inline-block;
    }
    input,
    select,
    textarea {
      flex: 1;
      border: 1px solid #000;
    }
    input[type="text"],
    input[type="number"] {
      height: 30px;
      padding: 5px;
    }
    input[type="file"] {
      border: none;
    }
    select {
      height: 30px;
    }
    textarea {
      height: 200px;
      padding: 5px;
    }
    &.btn {
      justify-content: center;
      border: none;
      button {
        margin: 20px 10px 0;
        padding: 10px 20px;
        background: #bbb;
        color: #fff;
        &:hover {
          background: #000;
        }
      }
    }
  }
`;

const ProductModify = ({ item }) => {
  const navigate = useNavigate();
  const { name, price, description, inventory, photo } = item;
  const [product, setProduct] = useState({
    name,
    price,
    description,
    inventory,
    photo,
  });

  const [photoValue, setPhotoValue] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // 선택된 파일
    setProduct((prevProduct) => ({ ...prevProduct, photo: file }));
    setPhotoValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product.photo && product.photo.name) {
        const storageRef = oStorage.ref();
        const fileRef = storageRef.child(product.photo.name);
        await fileRef.put(product.photo);
        product.photo = await fileRef.getDownloadURL(); // 업로드한 파일의 다운로드 URL을 상품 데이터에 추가
      }
      await productDB.child(item.key).update(product);
      navigate("/product");
    } catch (error) {
      console.log("오류 : ", error);
    }
  };

  return (
    <ProductModifyBlock>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">상품명:</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">가격:</label>
          <input
            required
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">요약설명:</label>
          <textarea
            name="description"
            id="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="inventory">재고:</label>
          <input
            required
            type="number"
            name="inventory"
            id="inventory"
            value={product.inventory}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="photo">상품사진:</label>
          <input
            type="file"
            name="photo"
            id="photo"
            value={photoValue}
            onChange={handleFileChange}
          />
        </div>
        <div className="btn">
          <button type="button" onClick={() => navigate(-1)}>
            취소
          </button>
          <button type="submit">등록</button>
        </div>
      </form>
    </ProductModifyBlock>
  );
};

export default ProductModify;

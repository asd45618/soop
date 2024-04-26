import React, { useState } from "react";
import styled from "styled-components";

const SearchBlock = styled.div`
  text-align: center;
  margin-bottom: 70px;
  select {
    width: 70px;
    height: 40px;
    border: 1px solid #d5d5d5;
    color: #666;
    padding-left: 5px;
  }
  input {
    border: 1px solid #e8ecf2;
    font-size: 16px;
    padding: 10px 20px;
    max-width: 300px;
    margin: 0 5px;
  }
  button {
    color: #fff;
    background: #669933;
    padding: 10px 50px;
  }
`;

const Search = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // onSearch(text, "search")
    setText("");
  };
  return (
    <SearchBlock>
      <form onSubmit={onSubmit}>
        <select name="search" id="search">
          <option value="subject">제목</option>
          <option value="content">내용</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={text}
          //   onChange={onChange}
        />
        <button type="submit">검색하기</button>
      </form>
    </SearchBlock>
  );
};

export default Search;

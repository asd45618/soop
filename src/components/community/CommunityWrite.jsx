import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { communityDB } from "../../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CommunityWriteBlock = styled.div`
  margin-bottom: 200px;
  .container {
    input {
      border: 1px solid #dee2e6;
    }
    select {
      width: 20%;
    }
    .btn {
      display: flex;
      justify-content: center;
      button {
        margin: 0 10px;
      }
    }
  }
`;

const CommunityWrite = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.members.user);

  const [board, setBoard] = useState({
    title: "",
    content: "",
    category: "news",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setBoard((post) => ({ ...post, [name]: value }));
  };

  const registerCommunity = (e) => {
    e.preventDefault();
    const date = new Date().toISOString();
    communityDB.push({
      ...board,
      writer: currentUser.name,
      hit: 1,
      date: date,
    });
    navigate("/community");
  };

  return (
    <CommunityWriteBlock>
      <Container>
        <Form onSubmit={registerCommunity}>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              placeholder="제목을 입력하세요."
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="내용을 입력하세요."
              name="content"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            name="category"
            onChange={handleChange}
          >
            <option value="news">news</option>
            <option value="interview">interview</option>
            <option value="notice">notice</option>
          </Form.Select>
          <div className="btn">
            <Button
              variant="success"
              type="button"
              onClick={() => navigate(-1)}
            >
              취소
            </Button>{" "}
            <Button variant="success" type="submit">
              등록
            </Button>{" "}
          </div>
        </Form>
      </Container>
    </CommunityWriteBlock>
  );
};

export default CommunityWrite;

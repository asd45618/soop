import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { communityDB } from "../../assets/firebase";

const CommunityModifyBlock = styled.div`
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
      border: none;
      button {
        margin: 0 10px;
      }
    }
  }
`;

const CommunityModify = ({ val }) => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: val.title,
    content: val.content,
    category: val.category,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setBoard((post) => ({ ...post, [name]: value }));
  };

  const registerCommunity = (e) => {
    e.preventDefault();
    communityDB.child(val.key).update({
      title: board.title,
      content: board.content,
      category: board.category,
    });
    navigate("/community");
  };

  return (
    <CommunityModifyBlock>
      <Container>
        <Form onSubmit={registerCommunity}>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              value={board.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              value={board.content}
              name="content"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            name="category"
            value={board.category}
            onChange={handleChange}
          >
            <option value="news">news</option>
            <option value="interview">interview</option>
            <option value="notice">notice</option>
          </Form.Select>
          <div className="btn">
            <Button
              variant="success"
              type="submit"
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
    </CommunityModifyBlock>
  );
};

export default CommunityModify;

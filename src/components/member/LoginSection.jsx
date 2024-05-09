import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMembers, userLogin } from "../../store/member";
import { fetchCarts, fetchProducts } from "../../store/product";

const LoginSectionBlock = styled.div`
  .container {
    width: 600px;
    input {
      border: 1px solid #dee2e6;
    }
    .btn {
      display: flex;
      justify-content: right;
      border: none;
    }
  }
`;

const LoginSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const emailRef = useRef("");
  const pwRef = useRef("");

  const loginBtn = (e) => {
    e.preventDefault();
    if (!email) {
      alert("이메일을 입력하세요.");
      emailRef.current.focus();
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력하세요.");
      pwRef.current.focus();
      return;
    }
    let findUser = members.find((item) => item.email == email);
    if (findUser) {
      if (findUser.pw != pw) {
        alert("비밀번호가 틀렸습니다.");
        pwRef.current.focus();
        return false;
      } else {
        dispatch(userLogin({ key: findUser.key, email: email }));
        dispatch(fetchCarts());
        dispatch(fetchProducts());
        navigate("/");
      }
    } else {
      alert("회원이 아닙니다.");
      emailRef.current.focus();
      return false;
    }
  };

  useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  return (
    <LoginSectionBlock>
      <Container>
        <Form onSubmit={loginBtn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={pwRef}
              onChange={(e) => setPw(e.target.value)}
            />
          </Form.Group>
          <div className="btn">
            <Button variant="success" type="submit">
              로그인
            </Button>
          </div>
        </Form>
      </Container>
    </LoginSectionBlock>
  );
};

export default LoginSection;

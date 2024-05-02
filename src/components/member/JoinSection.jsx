import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../store/member";
import { memberDB } from "../../assets/firebase";
import { useNavigate } from "react-router-dom";

const JoinSectionBlock = styled.div`
  .container {
    width: 600px;
    input {
      border: 1px solid #dee2e6;
    }
    .btn {
      display: flex;
      justify-content: right;
    }
  }
`;

const JoinSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const members = useSelector((state) => state.members.members);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwOk, setPwOk] = useState("");
  const [name, setName] = useState("");

  const emailRef = useRef("");
  const pwRef = useRef("");
  const pwOkRef = useRef("");
  const nameRef = useRef("");

  const joinBtn = async (e) => {
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
    if (!pwOk) {
      alert("비밀번호를 입력하세요.");
      pwOkRef.current.focus();
      return;
    }
    if (pw != pwOk) {
      alert("비밀번호가 일치하지 않습니다.");
      pwRef.current.focus();
      return;
    }
    if (!name) {
      alert("닉네임을 입력하세요.");
      nameRef.current.focus();
      return;
    }
    if (!emailCheck(email)) {
      return false;
    }
    if (!nameCheck(name)) {
      return false;
    }

    const addMember = { email: email, pw: pw, name: name };
    try {
      await memberDB.push(addMember);
      alert("회원가입이 성공했습니다.");
      navigate("/login");
    } catch (error) {
      console.log("오류 : ", error);
    }
  };

  const emailCheck = (email) => {
    let duplicate = members.find((item) => item.email === email);
    console.log(duplicate);
    if (duplicate) {
      alert("중복된 이메일입니다.");
      emailRef.current.focus();
      return false;
    } else {
      return true;
    }
  };

  const nameCheck = (name) => {
    let duplicate = members.find((item) => item.name === name);
    console.log(duplicate);
    if (duplicate) {
      alert("중복된 닉네임입니다.");
      nameRef.current.focus();
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  return (
    <JoinSectionBlock>
      <Container>
        <Form onSubmit={joinBtn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              ref={emailRef}
              onChange={(e) => {
                setEmail(e.target.value);
                emailCheck(e.target.value);
              }}
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="pwOk"
              ref={pwOkRef}
              onChange={(e) => setPwOk(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>닉네임</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nickname"
              name="nickname"
              ref={nameRef}
              onChange={(e) => {
                setName(e.target.value);
                nameCheck(e.target.value);
              }}
            />
          </Form.Group>
          <div className="btn">
            <Button variant="success" type="submit">
              회원가입
            </Button>
          </div>
        </Form>
      </Container>
    </JoinSectionBlock>
  );
};

export default JoinSection;
